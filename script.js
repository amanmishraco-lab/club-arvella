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
   SUPABASE CONNECTION
===================================== */

const SUPABASE_URL = "YOUR_SUPABASE_URL";

const SUPABASE_ANON_KEY =
  "YOUR_SUPABASE_ANON_KEY";


const supabaseClient =
  supabase.createClient(
    SUPABASE_URL,
    SUPABASE_ANON_KEY
  );


/* =====================================
   ENQUIRY FORM SUBMISSION
===================================== */

const enquiryForm =
  document.getElementById(
    "enquiryForm"
  );


if (enquiryForm) {

  enquiryForm.addEventListener(
    "submit",
    async function (event) {

      event.preventDefault();


      /* Get message area */

      const formMessage =
        enquiryForm.querySelector(
          ".form-message"
        );


      /* Get submit button */

      const submitButton =
        enquiryForm.querySelector(
          'button[type="submit"]'
        );


      /* Show processing message */

      if (formMessage) {

        formMessage.textContent =
          "Submitting your request...";

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


      /* Disable button */

      if (submitButton) {

        submitButton.disabled =
          true;

        submitButton.textContent =
          "SUBMITTING...";

      }


      /* Get form values */

      const enquiryData = {

        full_name:
          document.getElementById(
            "full_name"
          ).value.trim(),

        phone_number:
          document.getElementById(
            "phone_number"
          ).value.trim(),

        email:
          document.getElementById(
            "email"
          ).value.trim(),

        destination:
          document.getElementById(
            "destination"
          ).value.trim(),

        travel_date:
          document.getElementById(
            "travel_date"
          ).value || null,

        travelers:
          document.getElementById(
            "travelers"
          ).value.trim(),

        budget_range:
          document.getElementById(
            "budget_range"
          ).value.trim(),

        message:
          document.getElementById(
            "message"
          ).value.trim()

      };


      /* Send data to Supabase */

      const {
        data,
        error
      } =
        await supabaseClient
          .from("enquiries")
          .insert([
            enquiryData
          ])
          .select();


      /* If Supabase gives error */

      if (error) {

        console.error(
          "Supabase Error:",
          error
        );


        if (formMessage) {

          formMessage.textContent =
            "Sorry, we could not submit your request. Please try again.";

          formMessage.style.color =
            "#ff6b6b";

        }


        if (submitButton) {

          submitButton.disabled =
            false;

          submitButton.textContent =
            "REQUEST A CUSTOM HOLIDAY";

        }


        return;

      }


      /* SUCCESS MESSAGE */

      if (formMessage) {

        formMessage.textContent =
          "Thank you! We have successfully received your request. Our team will connect with you shortly.";

        formMessage.style.color =
          "#d4af37";

      }


      /* Reset form */

      enquiryForm.reset();


      /* Restore button */

      if (submitButton) {

        submitButton.disabled =
          false;

        submitButton.textContent =
          "REQUEST A CUSTOM HOLIDAY";

      }


      console.log(
        "Enquiry successfully submitted:",
        data
      );

    }
  );

}/* =====================================
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
