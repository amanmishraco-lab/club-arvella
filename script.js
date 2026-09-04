document.addEventListener("DOMContentLoaded", () => {

  /* ============================
     LOAD MORE DESTINATIONS
  ============================ */

  const loadMoreBtn =
    document.getElementById("loadMoreBtn");

  const moreDestinations =
    document.getElementById("moreDestinations");


  if (loadMoreBtn && moreDestinations) {

    loadMoreBtn.addEventListener("click", () => {

      const isOpen =
        moreDestinations.classList.contains("show");


      if (isOpen) {

        moreDestinations.classList.remove("show");

        loadMoreBtn.textContent =
          "EXPLORE ALL 30 DESTINATIONS";

      } else {

        moreDestinations.classList.add("show");

        loadMoreBtn.textContent =
          "SHOW LESS DESTINATIONS";

      }

    });

  }


  /* ============================
     NAVBAR SCROLL
  ============================ */

  const nav =
    document.querySelector(".nav");


  if (nav) {

    window.addEventListener(
      "scroll",
      () => {

        nav.classList.toggle(
          "nav-scrolled",
          window.scrollY > 40
        );

      },
      { passive: true }
    );

  }


  /* ============================
     MOBILE MENU
  ============================ */

  const menuBtn =
    document.querySelector(".menu-btn");

  const navLinks =
    document.querySelector(".nav-links");


  if (menuBtn && navLinks) {

    menuBtn.addEventListener("click", () => {

      navLinks.classList.toggle(
        "mobile-open"
      );


      if (
        navLinks.classList.contains(
          "mobile-open"
        )
      ) {

        menuBtn.textContent = "CLOSE";

      } else {

        menuBtn.textContent = "MENU";

      }

    });

  }


  /* ============================
     SMOOTH SCROLL
  ============================ */

  document
    .querySelectorAll('a[href^="#"]')
    .forEach((link) => {

      link.addEventListener(
        "click",
        function (event) {

          const targetId =
            this.getAttribute("href");


          if (
            !targetId ||
            targetId === "#"
          ) {
            return;
          }


          const target =
            document.querySelector(
              targetId
            );


          if (target) {

            event.preventDefault();

            target.scrollIntoView({

              behavior: "smooth",

              block: "start"

            });

          }

        }
      );

    });


  /* ============================
     IMPORTANT

     NO GLOBAL FALLBACK IMAGE

     Every failed destination must
     NOT become the same photo.
  ============================ */

  document
    .querySelectorAll(
      "img[data-destination-image]"
    )
    .forEach((image) => {

      image.addEventListener(
        "error",
        function () {

          this.classList.add(
            "destination-image-failed"
          );

        },
        { once: true }
      );

    });

});
