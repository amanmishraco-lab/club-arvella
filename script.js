document.addEventListener("DOMContentLoaded", () => {

  /* ==========================================
     LOAD MORE DESTINATIONS
  ========================================== */

  const loadMoreBtn = document.getElementById("loadMoreBtn");
  const moreDestinations = document.getElementById("moreDestinations");

  if (loadMoreBtn && moreDestinations) {

    loadMoreBtn.addEventListener("click", () => {

      const isOpen = moreDestinations.classList.contains("show");

      if (isOpen) {

        moreDestinations.classList.remove("show");

        loadMoreBtn.textContent = "EXPLORE ALL 30 DESTINATIONS";

        setTimeout(() => {

          const destinationSection =
            document.getElementById("destinations");

          if (destinationSection) {

            destinationSection.scrollIntoView({
              behavior: "smooth",
              block: "start"
            });

          }

        }, 100);

      } else {

        moreDestinations.classList.add("show");

        loadMoreBtn.textContent = "SHOW LESS DESTINATIONS";

      }

    });

  }


  /* ==========================================
     IMAGE FALLBACK SYSTEM
  ========================================== */

  const fallbackImage =
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=85";

  const allImages = document.querySelectorAll("img");

  allImages.forEach((image) => {

    image.addEventListener("error", function () {

      if (this.dataset.fallbackApplied === "true") return;

      this.dataset.fallbackApplied = "true";

      this.src = fallbackImage;

    });

  });


  /* ==========================================
     PREMIUM NAVBAR ON SCROLL
  ========================================== */

  const nav = document.querySelector(".nav");

  if (nav) {

    window.addEventListener("scroll", () => {

      if (window.scrollY > 40) {

        nav.classList.add("nav-scrolled");

      } else {

        nav.classList.remove("nav-scrolled");

      }

    });

  }


  /* ==========================================
     SMOOTH SCROLL
  ========================================== */

  const internalLinks =
    document.querySelectorAll('a[href^="#"]');

  internalLinks.forEach((link) => {

    link.addEventListener("click", function (event) {

      const targetId = this.getAttribute("href");

      if (!targetId || targetId === "#") return;

      const target = document.querySelector(targetId);

      if (target) {

        event.preventDefault();

        target.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });

      }

    });

  });


  /* ==========================================
     IMAGE LOADING EFFECT
  ========================================== */

  const destinationImages =
    document.querySelectorAll(".destination-card img");

  destinationImages.forEach((image) => {

    if (image.complete) {

      image.classList.add("image-loaded");

    }

    image.addEventListener("load", () => {

      image.classList.add("image-loaded");

    });

  });


  /* ==========================================
     COUNTER ANIMATION
  ========================================== */

  const counters =
    document.querySelectorAll(".counter");

  const animateCounter = (counter) => {

    if (counter.dataset.animated === "true") return;

    counter.dataset.animated = "true";

    const target = Number(counter.dataset.target);

    if (!target) return;

    let current = 0;

    const increment =
      Math.max(1, Math.ceil(target / 100));

    const timer = setInterval(() => {

      current += increment;

      if (current >= target) {

        current = target;

        clearInterval(timer);

      }

      if (target >= 1000) {

        counter.textContent =
          Math.floor(current / 1000) + "K+";

      } else {

        counter.textContent =
          current + "+";

      }

    }, 20);

  };


  if ("IntersectionObserver" in window) {

    const observer = new IntersectionObserver(

      (entries) => {

        entries.forEach((entry) => {

          if (entry.isIntersecting) {

            animateCounter(entry.target);

            observer.unobserve(entry.target);

          }

        });

      },

      {
        threshold: 0.5
      }

    );


    counters.forEach((counter) => {

      observer.observe(counter);

    });

  } else {

    counters.forEach((counter) => {

      animateCounter(counter);

    });

  }

});
