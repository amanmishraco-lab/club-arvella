document.addEventListener("DOMContentLoaded", () => {

  const loadMoreBtn = document.getElementById("loadMoreBtn");
  const moreDestinations = document.getElementById("moreDestinations");

  if (loadMoreBtn && moreDestinations) {
    loadMoreBtn.addEventListener("click", () => {

      const isOpen = moreDestinations.classList.contains("show");

      if (isOpen) {
        moreDestinations.classList.remove("show");
        loadMoreBtn.textContent = "EXPLORE ALL 30 DESTINATIONS";
      } else {
        moreDestinations.classList.add("show");
        loadMoreBtn.textContent = "SHOW LESS DESTINATIONS";
      }

    });
  }


  const fallbackImage =
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=85";

  document.querySelectorAll("img").forEach((image) => {

    image.addEventListener("error", function () {

      if (this.dataset.fallbackApplied === "true") return;

      this.dataset.fallbackApplied = "true";
      this.src = fallbackImage;

    });

  });


  const nav = document.querySelector(".nav");

  if (nav) {
    window.addEventListener("scroll", () => {
      nav.classList.toggle("nav-scrolled", window.scrollY > 40);
    });
  }


  document.querySelectorAll('a[href^="#"]').forEach((link) => {

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

});
