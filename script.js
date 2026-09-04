document.addEventListener("DOMContentLoaded", () => {

  /* =====================================
     LOAD MORE DESTINATIONS
  ===================================== */

  const loadMoreBtn =
    document.getElementById("loadMoreBtn");

  const moreDestinations =
    document.getElementById("moreDestinations");

  if (loadMoreBtn && moreDestinations) {

    loadMoreBtn.addEventListener("click", () => {

      const isOpen =
        moreDestinations.classList.contains("show");

      moreDestinations.classList.toggle(
        "show",
        !isOpen
      );

      loadMoreBtn.textContent =
        isOpen
          ? "EXPLORE ALL 30 DESTINATIONS"
          : "SHOW LESS DESTINATIONS";

      /* =====================================
     ENQUIRY FORM SUCCESS MESSAGE
  ===================================== */

  const enquiryForm =
    document.getElementById("enquiryForm");

  if (enquiryForm) {

    enquiryForm.addEventListener(
      "submit",
      function (event) {

        event.preventDefault();

        const formMessage =
          enquiryForm.querySelector(".form-message");

        if (formMessage) {

          formMessage.textContent =
            "Thank you! We have successfully received your request. Our team will connect with you shortly.";

          formMessage.classList.remove(
            "hidden"
          );

          formMessage.style.display =
            "block";

          formMessage.style.marginTop =
            "20px";

          formMessage.style.textAlign =
            "center";

          formMessage.style.color =
            "#d4af37";

          formMessage.style.fontWeight =
            "600";

        }

        /* Reset form after submission */

        enquiryForm.reset();

      }
    );

  }});

  }


  /* =====================================
     NAVBAR SCROLL
  ===================================== */

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


  /* =====================================
     SMOOTH SCROLL
  ===================================== */

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
            document.querySelector(targetId);

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


  /* =====================================
     MOBILE MENU
  ===================================== */

  const menuBtn =
    document.querySelector(".menu-btn");

  const navLinks =
    document.querySelector(".nav-links");

  if (menuBtn && navLinks) {

    menuBtn.addEventListener("click", () => {

      navLinks.classList.toggle(
        "mobile-open"
      );

      menuBtn.textContent =
        navLinks.classList.contains(
          "mobile-open"
        )
          ? "CLOSE"
          : "MENU";

    });

  }


  /* =====================================
     IMPORTANT

     NO GLOBAL FALLBACK IMAGE.

     This is what was causing the same
     wrong image to appear everywhere.
  ===================================== */

});
