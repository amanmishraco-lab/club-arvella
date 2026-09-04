(() => {

  const SUMMARY_API =
    "https://en.wikipedia.org/api/rest_v1/page/summary/";

  const COMMONS_API =
    "https://commons.wikimedia.org/w/api.php";


  const imageCache =
    new Map();

  const usedNormalImages =
    new Set();


  function normalizeUrl(url) {

    if (!url) return "";

    return url
      .split("?")[0]
      .toLowerCase()
      .replace(
        /\/\d+px-/,
        "/"
      );

  }


  function createPlaceholder(title) {

    const safeTitle =
      String(title || "Club Arvella")
        .replace(/[<>&"]/g, "");


    const svg = `
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1600"
        height="1000"
      >

        <defs>

          <linearGradient
            id="bg"
            x1="0"
            y1="0"
            x2="1"
            y2="1"
          >

            <stop
              offset="0%"
              stop-color="#071a2b"
            />

            <stop
              offset="100%"
              stop-color="#18344d"
            />

          </linearGradient>

        </defs>

        <rect
          width="100%"
          height="100%"
          fill="url(#bg)"
        />

        <rect
          x="50"
          y="50"
          width="1500"
          height="900"
          fill="none"
          stroke="#d4af37"
          stroke-width="3"
          opacity="0.35"
        />

        <text
          x="800"
          y="500"
          text-anchor="middle"
          fill="#d4af37"
          font-size="65"
          font-family="Georgia, serif"
        >
          ${safeTitle}
        </text>

      </svg>
    `;


    return (
      "data:image/svg+xml;charset=UTF-8," +
      encodeURIComponent(svg)
    );

  }


  async function getSummaryImage(title) {

    try {

      const response =
        await fetch(
          SUMMARY_API +
          encodeURIComponent(
            title.replace(/\s+/g, "_")
          ),
          {
            cache: "force-cache"
          }
        );


      if (!response.ok) {

        return null;

      }


      const data =
        await response.json();


      return (
        data.originalimage?.source ||
        data.thumbnail?.source ||
        null
      );

    } catch (error) {

      return null;

    }

  }


  async function getCommonsImages(title) {

    try {

      const params =
        new URLSearchParams({

          action: "query",

          generator: "search",

          gsrsearch: title,

          gsrnamespace: "6",

          gsrlimit: "10",

          prop: "imageinfo",

          iiprop: "url",

          iiurlwidth: "1600",

          format: "json",

          origin: "*"

        });


      const response =
        await fetch(
          COMMONS_API +
          "?" +
          params.toString(),
          {
            cache: "force-cache"
          }
        );


      if (!response.ok) {

        return [];

      }


      const data =
        await response.json();


      const pages =
        Object.values(
          data.query?.pages || {}
        );


      return pages
        .map(
          page =>
            page.imageinfo?.[0]?.thumburl ||
            page.imageinfo?.[0]?.url ||
            null
        )
        .filter(Boolean);

    } catch (error) {

      return [];

    }

  }


  async function getImageCandidates(title) {

    if (imageCache.has(title)) {

      return imageCache.get(title);

    }


    const candidates = [];


    const summaryImage =
      await getSummaryImage(title);


    if (summaryImage) {

      candidates.push(
        summaryImage
      );

    }


    const commonsImages =
      await getCommonsImages(title);


    commonsImages.forEach(
      image => {

        if (
          !candidates.includes(image)
        ) {

          candidates.push(image);

        }

      }
    );


    imageCache.set(
      title,
      candidates
    );


    return candidates;

  }


  function isFloatingImage(image) {

    return Boolean(
      image.closest(
        ".floating-track"
      )
    );

  }


  async function applyImage(
    imageElement,
    source
  ) {

    return new Promise(
      resolve => {

        const test =
          new Image();


        test.onload =
          () => {

            imageElement.src =
              source;

            imageElement.classList.add(
              "destination-image-loaded"
            );

            resolve(true);

          };


        test.onerror =
          () => {

            resolve(false);

          };


        test.src =
          source;

      }
    );

  }


  async function loadImage(
    imageElement
  ) {

    const title =
      imageElement.dataset.wiki ||
      imageElement.alt;


    if (!title) {

      return;

    }


    const floating =
      isFloatingImage(
        imageElement
      );


    const candidates =
      await getImageCandidates(
        title
      );


    if (
      candidates.length === 0
    ) {

      imageElement.src =
        createPlaceholder(title);

      imageElement.classList.add(
        "destination-image-loaded",
        "destination-image-unavailable"
      );

      return;

    }


    /*
      Floating animation intentionally
      contains duplicate elements.

      Same destination can therefore use
      the same image in its duplicated
      animation copy.
    */

    if (floating) {

      for (
        const candidate
        of candidates
      ) {

        const loaded =
          await applyImage(
            imageElement,
            candidate
          );

        if (loaded) {

          return;

        }

      }

    }


    /*
      Normal destination cards:
      never use an already-used image.
    */

    for (
      const candidate
      of candidates
    ) {

      const key =
        normalizeUrl(candidate);


      if (
        usedNormalImages.has(key)
      ) {

        continue;

      }


      const loaded =
        await applyImage(
          imageElement,
          candidate
        );


      if (loaded) {

        usedNormalImages.add(
          key
        );

        return;

      }

    }


    /*
      No unique valid image found.
      Show destination-specific placeholder.
      Never use another destination photo.
    */

    imageElement.src =
      createPlaceholder(title);

    imageElement.classList.add(
      "destination-image-loaded",
      "destination-image-unavailable"
    );

  }


  async function loadImagesInOrder(
    images
  ) {

    for (
      const image
      of images
    ) {

      await loadImage(image);

    }

  }


  function start() {

    const allImages =
      Array.from(
        document.querySelectorAll(
          "img[data-destination-image]"
        )
      );


    /*
      Priority:
      first visible destination cards.
    */

    const primaryImages =
      allImages.filter(
        image =>
          !image.closest(
            "#moreDestinations"
          )
      );


    const moreImages =
      allImages.filter(
        image =>
          image.closest(
            "#moreDestinations"
          )
      );


    loadImagesInOrder(
      primaryImages
    );


    /*
      Hidden destinations load later
      so mobile speed remains better.
    */

    setTimeout(
      () => {

        loadImagesInOrder(
          moreImages
        );

      },
      1500
    );

  }


  if (
    document.readyState ===
    "loading"
  ) {

    document.addEventListener(
      "DOMContentLoaded",
      start
    );

  } else {

    start();

  }

})();
