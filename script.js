/* =====================================
   CLUB ARVELLA WEBSITE JAVASCRIPT
===================================== */


/* =====================================
   SUPABASE CONNECTION
===================================== */

const SUPABASE_URL = "https://vnuvidqgfdufhkvivfki.supabase.co";

const SUPABASE_ANON_KEY =
  "sb_publishable_ZE4do_lwZXvbsvtsD9bpfA_U1_LvuSL";


/* Create Supabase Client */

const supabaseClient =
  supabase.createClient(
    SUPABASE_URL,
    SUPABASE_ANON_KEY
  );


/* =====================================
   DOM READY
===================================== */

document.addEventListener(
  "DOMContentLoaded",
  () => {


    console.log(
      "Club Arvella Script Loaded Successfully"
    );


    /* =====================================
       LOAD MORE DESTINATIONS
    ===================================== */

    const loadMoreBtn =
      document.getElementById(
        "loadMoreBtn"
      );

    const moreDestinations =
      document.getElementById(
        "moreDestinations"
      );


    if (
      loadMoreBtn &&
      moreDestinations
    ) {

      loadMoreBtn.addEventListener(
        "click",
        () => {

          const isOpen =
            moreDestinations.classList.contains(
              "show"
            );


          moreDestinations.classList.toggle(
            "show",
            !isOpen
          );


          loadMoreBtn.textContent =
            isOpen
              ? "EXPLORE ALL 30 DESTINATIONS"
              : "SHOW LESS DESTINATIONS";

        }
      );

    }


    /* =====================================
       NAVBAR SCROLL
    ===================================== */

    const nav =
      document.querySelector(
        ".nav"
      );


    if (nav) {

      window.addEventListener(
        "scroll",
        () => {

          nav.classList.toggle(
            "nav-scrolled",
            window.scrollY > 40
          );

        },
        {
          passive: true
        }
      );

    }


    /* =====================================
       SMOOTH SCROLL
    ===================================== */

    document
      .querySelectorAll(
        'a[href^="#"]'
      )
      .forEach(
        (link) => {

          link.addEventListener(
            "click",
            function (event) {

              const targetId =
                this.getAttribute(
                  "href"
                );


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
                  behavior:
                    "smooth",

                  block:
                    "start"
                });

              }

            }
          );

        }
      );


    /* =====================================
       MOBILE MENU
    ===================================== */

    const menuBtn =
      document.querySelector(
        ".menu-btn"
      );

    const navLinks =
      document.querySelector(
        ".nav-links"
      );


    if (
      menuBtn &&
      navLinks
    ) {

      menuBtn.addEventListener(
        "click",
        () => {

          navLinks.classList.toggle(
            "mobile-open"
          );


          menuBtn.textContent =
            navLinks.classList.contains(
              "mobile-open"
            )
              ? "CLOSE"
              : "MENU";

        }
      );

    }


    /* =====================================
       ENQUIRY FORM
    ===================================== */

    const enquiryForm =
      document.getElementById(
        "enquiryForm"
      );


    if (!enquiryForm) {

      console.log(
        "No enquiry form found on this page"
      );

      return;

    }


    console.log(
      "Enquiry form connected successfully"
    );


    enquiryForm.addEventListener(
      "submit",
      async function (event) {

        event.preventDefault();


        console.log(
          "Form submit clicked"
        );


        /* Get message area */

        const formMessage =
          enquiryForm.querySelector(
            ".form-message"
          );


        /* Get button */

        const submitButton =
          enquiryForm.querySelector(
            'button[type="submit"]'
          );


        /* =====================================
           IMMEDIATE MESSAGE
        ===================================== */

        if (formMessage) {

          formMessage.classList.remove(
            "hidden"
          );

          formMessage.style.display =
            "block";

          formMessage.style.marginTop =
            "20px";

          formMessage.style.textAlign =
            "center";

          formMessage.style.fontWeight =
            "600";

          formMessage.style.color =
            "#d4af37";

          formMessage.textContent =
            "Submitting your request...";

        }


        /* Disable Button */

        if (submitButton) {

          submitButton.disabled =
            true;

          submitButton.textContent =
            "SUBMITTING...";

        }


        /* =====================================
           COLLECT FORM DATA
        ===================================== */

        const enquiryData = {

          full_name:
            document
              .getElementById(
                "full_name"
              )
              .value
              .trim(),

          phone_number:
            document
              .getElementById(
                "phone_number"
              )
              .value
              .trim(),

          email:
            document
              .getElementById(
                "email"
              )
              .value
              .trim(),

          destination:
            document
              .getElementById(
                "destination"
              )
              .value
              .trim(),

          travel_date:
            document
              .getElementById(
                "travel_date"
              )
              .value || null,

          travelers:
            document
              .getElementById(
                "travelers"
              )
              .value
              .trim(),

          budget_range:
            document
              .getElementById(
                "budget_range"
              )
              .value
              .trim(),

          message:
            document
              .getElementById(
                "message"
              )
              .value
              .trim()

        };


        console.log(
          "Sending data:",
          enquiryData
        );


        /* =====================================
           SEND TO SUPABASE
        ===================================== */

        try {

          const response =
            await supabaseClient
              .from(
                "enquiries"
              )
              .insert([
                enquiryData
              ]);


          console.log(
            "Supabase response:",
            response
          );


          /* =====================================
             ERROR
          ===================================== */

          if (response.error) {

            console.error(
              response.error
            );


            if (formMessage) {

              formMessage.textContent =
                "Unable to submit your request: " +
                response.error.message;

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


          /* =====================================
             SUCCESS
          ===================================== */

          if (formMessage) {

            formMessage.textContent =
              "Thank you! We have successfully received your request. Our team will connect with you shortly.";

            formMessage.style.color =
              "#d4af37";

            formMessage.style.display =
              "block";

          }


          /* Reset Form */

          enquiryForm.reset();


          /* Restore Button */

          if (submitButton) {

            submitButton.disabled =
              false;

            submitButton.textContent =
              "REQUEST A CUSTOM HOLIDAY";

          }


          console.log(
            "Enquiry submitted successfully"
          );


        } catch (error) {

          console.error(
            "Unexpected error:",
            error
          );


          if (formMessage) {

            formMessage.textContent =
              "Something went wrong. Please try again.";

            formMessage.style.color =
              "#ff6b6b";

            formMessage.style.display =
              "block";

          }


          if (submitButton) {

            submitButton.disabled =
              false;

            submitButton.textContent =
              "REQUEST A CUSTOM HOLIDAY";

          }

        }

      }
    );


  }
);
