(() => {

  const WIKI_API =
    "https://en.wikipedia.org/api/rest_v1/page/summary/";

  const COMMONS_API =
    "https://commons.wikimedia.org/w/api.php";

  const loadedImages = new Map();
  const usedImages = new Set();


  /* =========================================
     CREATE PREMIUM PLACEHOLDER
     ONLY USED IF IMAGE CANNOT BE FOUND

     IMPORTANT:
     No repeated fallback photo
  ========================================= */

  function createPlaceholder(name) {

    const safeName = String(name || "Club Arvella")
      .replace(/[<>&"]/g, "");

    const svg = `
      <svg xmlns="http://www.w3.org/2000/svg"
           width="1600"
           height="1000"
           viewBox="0 0 1600 1000">

        <defs>

          <linearGradient
            id="background"
            x1="0"
            y1="0"
            x2="1"
            y2="1">

            <stop
              offset="0%"
              stop-color="#0b1d30"/>

            <stop
              offset="100%"
              stop-color="#172d45"/>

          </linearGradient>

        </defs>

        <rect
          width="1600"
          height="1000"
          fill="url(#background)"/>

        <rect
          x="50"
          y="50"
          width="1500"
          height="900"
          rx="8"
          fill="none"
          stroke="#d4af37"
          stroke-opacity="0.35"
          stroke-width="3"/>

        <text
          x="800"
          y="500"
          text-anchor="middle"
          fill="#d4af37"
          font-family="Georgia, serif"
          font-size="70">

          ${safeName}

        </text>

      </svg>
    `;

    return "data:image/svg+xml;charset=UTF-8," +
      encodeURIComponent(svg);

  }


  /* =========================================
     NORMALIZE IMAGE URL
  ========================================= */

  function normalize(url) {

    if (!url) return "";

    return url
      .replace(/\/\d+px-/i, "/")
      .split("?")[0]
      .toLowerCase();

  }


  /* =========================================
     WIKIPEDIA IMAGE
  ========================================= */

  async function getWikipediaImage(title) {

    try {

      const response = await fetch(

        WIKI_API +
        encodeURIComponent(
          title.replace(/\s+/g, "_")
        ),

        {
          mode: "cors",
          cache: "force-cache"
        }

      );

      if (!response.ok) return null;

      const data = await response.json();

      const image =
        data.originalimage?.source ||
        data.thumbnail?.source ||
        null;

      return image;

    } catch (error) {

      return null;

    }

  }


  /* =========================================
     WIKIMEDIA COMMONS BACKUP

     Searches for another image
     if the first image is duplicate
  ========================================= */

  async function getCommonsImage(title) {

    try {

      const params = new URLSearchParams({

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


      const response = await fetch(

        COMMONS_API +
        "?" +
        params.toString(),

        {
          cache: "force-cache"
        }

      );


      if (!response.ok) return null;

      const data = await response.json();

      const pages =
        Object.values(
          data.query?.pages || {}
        );


      for (const page of pages) {

        const imageInfo =
          page.imageinfo?.[0];

        const image =
          imageInfo?.thumburl ||
          imageInfo?.url;

        if (!image) continue;

        const normalized =
          normalize(image);

        if (!usedImages.has(normalized)) {

          return image;

        }

      }


      return null;

    } catch (error) {

      return null;

    }

  }


  /* =========================================
     GET UNIQUE IMAGE

     Duplicate image is rejected.
     Then Commons is searched.
  ========================================= */

  async function getUniqueImage(title) {

    if (loadedImages.has(title)) {

      return loadedImages.get(title);

    }


    let image =
      await getWikipediaImage(title);


    if (image) {

      const normalized =
        normalize(image);

      if (!usedImages.has(normalized)) {

        usedImages.add(normalized);

        loadedImages.set(
          title,
          image
        );

        return image;

      }

    }


    image =
      await getCommonsImage(title);


    if (image) {

      const normalized =
        normalize(image);

      if (!usedImages.has(normalized)) {

        usedImages.add(normalized);

        loadedImages.set(
          title,
          image
        );

        return image;

      }

    }


    return null;

  }


  /* =========================================
     LOAD ONE IMAGE
  ========================================= */

  async function loadImage(imageElement) {

    const title =
      imageElement.dataset.wiki ||
      imageElement.alt ||
      "India";


    /*
      Floating rows intentionally contain
      duplicate DOM elements for smooth
      continuous animation.

      For normal destination cards,
      unique image protection is active.
    */

    const isFloating =
      imageElement.closest(".floating-track");


    if (isFloating) {

      if (loadedImages.has(title)) {

        imageElement.src =
          loadedImages.get(title);

        imageElement.classList.add(
          "image-loaded"
        );

        return;

      }

    }


    const image =
      await getUniqueImage(title);


    if (image) {

      imageElement.src = image;

      imageElement.classList.add(
        "image-loaded"
      );

      return;

    }


    /*
      If no valid unique photo exists,
      use a destination-specific
      premium placeholder.

      Never use the same random
      fallback image.
    */

    imageElement.src =
      createPlaceholder(title);

    imageElement.classList.add(
      "image-loaded",
      "image-placeholder"
    );

  }


  /* =========================================
     LOAD PRIORITY IMAGES FIRST
  ========================================= */

  async function loadImages() {

    const images =
      Array.from(
        document.querySelectorAll(
          "img[data-destination-image]"
        )
      );


    /*
      Visible destination cards first.
    */

    const priority =
      images.filter(
        image =>
          !image.closest(".more-destinations")
      );


    const lazy =
      images.filter(
        image =>
          image.closest(".more-destinations")
      );


    /*
      Load visible images gradually.

      This prevents mobile from
      opening 30 image requests
      at exactly the same time.
    */

    for (const image of priority) {

      await loadImage(image);

    }


    /*
      Remaining images are loaded
      after the important content.
    */

    setTimeout(async () => {

      for (const image of lazy) {

        await loadImage(image);

      }

    }, 500);

  }


  /* =========================================
     START
  ========================================= */

  if (
    document.readyState ===
    "loading"
  ) {

    document.addEventListener(
      "DOMContentLoaded",
      loadImages
    );

  } else {

    loadImages();

  }

})();
