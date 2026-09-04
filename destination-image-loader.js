(() => {

  const API =
    "https://en.wikipedia.org/api/rest_v1/page/summary/";


  const imageCache =
    new Map();


  const loadingCache =
    new Map();


  async function getImage(title) {

    if (imageCache.has(title)) {

      return imageCache.get(title);

    }


    if (loadingCache.has(title)) {

      return loadingCache.get(title);

    }


    const request =
      fetch(
        API +
        encodeURIComponent(
          title.replace(/\s+/g, "_")
        ),
        {
          cache: "force-cache"
        }
      )
        .then((response) => {

          if (!response.ok) {

            throw new Error(
              "Image not found"
            );

          }

          return response.json();

        })
        .then((data) => {

          const image =
            data.originalimage?.source ||
            data.thumbnail?.source ||
            null;


          if (!image) {

            throw new Error(
              "No image available"
            );

          }


          imageCache.set(
            title,
            image
          );


          return image;

        })
        .catch(() => null)
        .finally(() => {

          loadingCache.delete(
            title
          );

        });


    loadingCache.set(
      title,
      request
    );


    return request;

  }


  function setImage(
    imageElement,
    source
  ) {

    return new Promise(
      (resolve) => {

        const testImage =
          new Image();


        testImage.decoding =
          "async";


        testImage.onload =
          () => {

            imageElement.src =
              source;

            imageElement.classList.add(
              "destination-image-loaded"
            );

            resolve(true);

          };


        testImage.onerror =
          () => {

            resolve(false);

          };


        testImage.src =
          source;

      }
    );

  }


  async function loadDestinationImage(
    imageElement
  ) {

    const title =
      imageElement.dataset.wiki ||
      imageElement.alt;


    if (!title) return;


    const source =
      await getImage(title);


    if (!source) {

      imageElement.classList.add(
        "destination-image-unavailable"
      );

      return;

    }


    const loaded =
      await setImage(
        imageElement,
        source
      );


    if (!loaded) {

      imageElement.classList.add(
        "destination-image-unavailable"
      );

    }

  }


  async function start() {

    const images =
      [
        ...document.querySelectorAll(
          "img[data-destination-image]"
        )
      ];


    /*
      Floating images can have duplicate
      elements for continuous animation.

      Normal destination cards should
      still receive their correct image.
    */


    for (
      const image of images
    ) {

      await loadDestinationImage(
        image
      );

    }

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
