document.addEventListener(
  "DOMContentLoaded",
  async () => {

    const params =
      new URLSearchParams(
        window.location.search
      );


    const slug =
      (
        params.get("place") ||
        ""
      ).toLowerCase();


    const data =
      window
        .CLUB_ARVELLA_DESTINATIONS?.[
          slug
        ];


    if (!data) {

      console.error(
        "Destination not found:",
        slug
      );

      return;

    }


    /* =====================================
       PAGE TEXT
    ===================================== */

    document.title =
      `${data.name} | Club Arvella`;


    const destinationName =
      document.getElementById(
        "destinationName"
      );

    const destinationTagline =
      document.getElementById(
        "destinationTagline"
      );

    const detailsHeading =
      document.getElementById(
        "detailsHeading"
      );

    const destinationDescription =
      document.getElementById(
        "destinationDescription"
      );


    if (destinationName) {

      destinationName.textContent =
        data.name;

    }


    if (destinationTagline) {

      destinationTagline.textContent =
        data.tagline;

    }


    if (detailsHeading) {

      detailsHeading.textContent =
        `Discover ${data.name} in Style.`;

    }


    if (destinationDescription) {

      destinationDescription.textContent =
        `${data.name} is curated for travellers who want a balanced mix of iconic experiences, local character and comfortable pacing.`;

    }


    /* =====================================
       DESTINATION INFORMATION
    ===================================== */

    const bestTime =
      document.getElementById(
        "bestTime"
      );

    const duration =
      document.getElementById(
        "duration"
      );

    const travelStyle =
      document.getElementById(
        "travelStyle"
      );

    const bestFor =
      document.getElementById(
        "bestFor"
      );


    if (bestTime) {

      bestTime.textContent =
        data.bestTime;

    }


    if (duration) {

      duration.textContent =
        data.duration;

    }


    if (travelStyle) {

      travelStyle.textContent =
        data.style;

    }


    if (bestFor) {

      bestFor.textContent =
        data.bestFor;

    }


    /* =====================================
       CTA
    ===================================== */

    const ctaTitle =
      document.getElementById(
        "ctaTitle"
      );


    if (ctaTitle) {

      ctaTitle.textContent =
        `Ready To Explore ${data.name}?`;

    }


    /* =====================================
       IMAGE API
    ===================================== */

    const SUMMARY_API =
      "https://en.wikipedia.org/api/rest_v1/page/summary/";

    const COMMONS_API =
      "https://commons.wikimedia.org/w/api.php";


    const usedImages =
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


    async function getSummaryImage(
      title
    ) {

      try {

        const response =
          await fetch(
            SUMMARY_API +
            encodeURIComponent(
              title
                .replace(
                  /\s+/g,
                  "_"
                )
            ),
            {
              cache: "force-cache"
            }
          );


        if (!response.ok) {

          return null;

        }


        const result =
          await response.json();


        return (
          result.originalimage?.source ||
          result.thumbnail?.source ||
          null
        );

      } catch (error) {

        return null;

      }

    }


    async function getCommonsImages(
      title
    ) {

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


        const result =
          await response.json();


        return Object
          .values(
            result.query?.pages || {}
          )
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


    async function getUniqueImage(
      title
    ) {

      const candidates = [];


      const summaryImage =
        await getSummaryImage(
          title
        );


      if (summaryImage) {

        candidates.push(
          summaryImage
        );

      }


      const commonsImages =
        await getCommonsImages(
          title
        );


      commonsImages.forEach(
        image => {

          if (
            !candidates.includes(
              image
            )
          ) {

            candidates.push(
              image
            );

          }

        }
      );


      for (
        const image
        of candidates
      ) {

        const key =
          normalizeUrl(
            image
          );


        if (
          !usedImages.has(key)
        ) {

          usedImages.add(key);

          return image;

        }

      }


      return null;

    }


    /* =====================================
       HERO IMAGE

       IMPORTANT:
       Ignore old loremflickr URL.
    ===================================== */

    const hero =
      document.getElementById(
        "destinationHero"
      );


    const heroImage =
      await getSummaryImage(
        data.name
      );


    if (
      hero &&
      heroImage
    ) {

      hero.style.backgroundImage =
        `
        linear-gradient(
          90deg,
          rgba(7, 26, 43, 0.88),
          rgba(7, 26, 43, 0.45)
        ),
        url("${heroImage}")
        `;

      hero.style.backgroundSize =
        "cover";

      hero.style.backgroundPosition =
        "center";

      hero.style.backgroundRepeat =
        "no-repeat";

    }


    /* =====================================
       TOP 3 PLACES
    ===================================== */

    const topPlaces =
      document.getElementById(
        "topPlaces"
      );


    if (
      !topPlaces ||
      !data.places
    ) {

      return;

    }


    topPlaces.innerHTML =
      data.places
        .map(
          (
            place,
            index
          ) => {

            return `

              <article
                class="place-card"
              >

                <div
                  class="place-image"
                >

                  <img
                    data-place-image="${index}"
                    alt="${place[0]}"
                    loading="eager"
                    decoding="async"
                  >

                </div>


                <div
                  class="place-card-content"
                >

                  <span
                    class="place-number"
                  >
                    ${String(
                      index + 1
                    ).padStart(
                      2,
                      "0"
                    )}
                  </span>


                  <h3>
                    ${place[0]}
                  </h3>


                  <p>
                    ${place[1]}
                  </p>


                  <div
                    class="place-meta"
                  >

                    <div>

                      <span>
                        BEST TIME
                      </span>

                      <b>
                        ${place[2]}
                      </b>

                    </div>


                    <div>

                      <span>
                        TIME TO EXPLORE
                      </span>

                      <b>
                        ${place[3]}
                      </b>

                    </div>

                  </div>

                </div>

              </article>

            `;

          }
        )
        .join("");


    /* =====================================
       LOAD UNIQUE PLACE IMAGES
    ===================================== */

    const placeImages =
      Array.from(
        topPlaces.querySelectorAll(
          "img[data-place-image]"
        )
      );


    for (
      let index = 0;
      index < placeImages.length;
      index++
    ) {

      const imageElement =
        placeImages[index];


      const place =
        data.places[index];


      /*
        Use exact place name first.
      */

      const image =
        await getUniqueImage(
          place[0]
        );


      if (image) {

        imageElement.src =
          image;

      } else {

        /*
          No random fallback.
          If no correct image exists,
          keep premium background.
        */

        imageElement.style.display =
          "none";


        imageElement
          .parentElement
          .classList.add(
            "image-error"
          );

      }

    }

  }
);
