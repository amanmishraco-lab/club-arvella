document.addEventListener("DOMContentLoaded", async () => {

    const images = document.querySelectorAll(
        "img[data-destination-image]"
    );

    if (!images.length) return;


    /* =========================================
       IMAGE CACHE
    ========================================= */

    const imageCache = new Map();


    /* =========================================
       GET WIKIPEDIA IMAGE
    ========================================= */

    async function getDestinationImage(wikiTitle) {

        if (imageCache.has(wikiTitle)) {
            return imageCache.get(wikiTitle);
        }

        try {

            const title = encodeURIComponent(wikiTitle);

            const response = await fetch(
                `https://en.wikipedia.org/api/rest_v1/page/summary/${title}`,
                {
                    headers: {
                        "Accept": "application/json"
                    }
                }
            );

            if (!response.ok) {
                throw new Error("Image request failed");
            }

            const data = await response.json();


            let imageUrl = null;


            if (data.originalimage && data.originalimage.source) {

                imageUrl = data.originalimage.source;

            } else if (
                data.thumbnail &&
                data.thumbnail.source
            ) {

                imageUrl = data.thumbnail.source;

            }


            imageCache.set(wikiTitle, imageUrl);

            return imageUrl;

        } catch (error) {

            console.warn(
                "Could not load image:",
                wikiTitle
            );

            return null;

        }

    }


    /* =========================================
       LOAD ALL IMAGES
    ========================================= */

    const requests = [];

    images.forEach((img) => {

        const wikiTitle =
            img.getAttribute("data-wiki") ||
            img.alt;

        requests.push({
            img,
            wikiTitle
        });

    });


    /* =========================================
       LOAD WITH LIMITED CONCURRENCY
       Better for mobile performance
    ========================================= */

    const CONCURRENT_REQUESTS = 4;

    let currentIndex = 0;


    async function worker() {

        while (currentIndex < requests.length) {

            const requestIndex = currentIndex++;

            const item =
                requests[requestIndex];

            const {
                img,
                wikiTitle
            } = item;


            const imageUrl =
                await getDestinationImage(
                    wikiTitle
                );


            if (imageUrl) {

                const preload =
                    new Image();

                preload.decoding =
                    "async";

                preload.src =
                    imageUrl;


                preload.onload = () => {

                    img.src =
                        imageUrl;

                    img.classList.add(
                        "image-loaded"
                    );

                };


                preload.onerror = () => {

                    console.warn(
                        "Image failed:",
                        wikiTitle
                    );

                };

            }

        }

    }


    const workers = [];


    for (
        let i = 0;
        i < CONCURRENT_REQUESTS;
        i++
    ) {

        workers.push(
            worker()
        );

    }


    await Promise.all(
        workers
    );

});
