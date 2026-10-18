
const REVIEWS_SUPABASE_URL = "https://otsdkbnneyjxeawoujtf.supabase.co";
const REVIEWS_SUPABASE_KEY = "sb_publishable_ZEgbViwjQFEfgXiDL8M0tg_Fy0Rsua1";

async function loadApprovedReviews() {
  const list = document.getElementById("reviews-list");
  if (!list) return;

  try {
    const response = await fetch(
      `${REVIEWS_SUPABASE_URL}/rest/v1/reviews?select=customer_name,rating,review_text,created_at&status=eq.approved&order=created_at.desc`,
      {
        headers: {
          apikey: REVIEWS_SUPABASE_KEY,
          Authorization: `Bearer ${REVIEWS_SUPABASE_KEY}`
        }
      }
    );

    if (!response.ok) {
      throw new Error(
        `Could not load reviews: ${response.status} ${await response.text()}`
      );
    }

    const reviews = await response.json();
    list.replaceChildren();

    if (reviews.length === 0) {
      list.textContent =
        "Be the first to share your travel experience.";
      return;
    }

    let currentIndex = 0;
    let autoTimer = null;

    const carousel = document.createElement("div");
    carousel.className = "reviews-carousel";

    const previous = document.createElement("button");
    previous.type = "button";
    previous.className = "reviews-arrow";
    previous.textContent = "‹";
    previous.setAttribute("aria-label", "Previous review");

    const next = document.createElement("button");
    next.type = "button";
    next.className = "reviews-arrow";
    next.textContent = "›";
    next.setAttribute("aria-label", "Next review");

    const viewport = document.createElement("div");
    viewport.className = "reviews-carousel-viewport";

    const track = document.createElement("div");
    track.className = "reviews-carousel-track";

    const dots = document.createElement("div");
    dots.className = "reviews-carousel-dots";

    reviews.forEach((review, index) => {
      const card = document.createElement("article");
      card.className = "review-card";

      const stars = document.createElement("div");
      stars.className = "review-stars";
      stars.textContent =
        "★".repeat(review.rating) +
        "☆".repeat(5 - review.rating);
      stars.setAttribute(
        "aria-label",
        `${review.rating} out of 5 stars`
      );

      const quote = document.createElement("p");
      quote.className = "review-quote";
      quote.textContent = `“${review.review_text}”`;

      const name = document.createElement("h3");
      name.className = "review-author";
      name.textContent = review.customer_name;

      card.append(stars, quote, name);
      track.appendChild(card);

      const dot = document.createElement("button");
      dot.type = "button";
      dot.className = "reviews-dot";
      dot.setAttribute(
        "aria-label",
        `Show review ${index + 1}`
      );
      dot.addEventListener("click", () => showReview(index));
      dots.appendChild(dot);
    });

    viewport.appendChild(track);

    const controls = document.createElement("div");
    controls.className = "reviews-carousel-controls";
    controls.append(previous, dots, next);

    carousel.append(viewport, controls);
    list.appendChild(carousel);

    function showReview(index) {
      currentIndex = (index + reviews.length) % reviews.length;

      track.style.transform =
        `translateX(-${currentIndex * 100}%)`;

      Array.from(dots.children).forEach((dot, i) => {
        dot.classList.toggle("active", i === currentIndex);
        dot.setAttribute(
          "aria-current",
          i === currentIndex ? "true" : "false"
        );
      });
    }

    function stopAutoSlide() {
      if (autoTimer !== null) {
        clearInterval(autoTimer);
        autoTimer = null;
      }
    }

    function startAutoSlide() {
      stopAutoSlide();

      if (
        reviews.length < 2 ||
        window.matchMedia("(prefers-reduced-motion: reduce)").matches
      ) {
        return;
      }

      autoTimer = setInterval(() => {
        showReview(currentIndex + 1);
      }, 5000);
    }

    previous.addEventListener("click", () => {
      showReview(currentIndex - 1);
      startAutoSlide();
    });

    next.addEventListener("click", () => {
      showReview(currentIndex + 1);
      startAutoSlide();
    });

    carousel.addEventListener("mouseenter", stopAutoSlide);
    carousel.addEventListener("mouseleave", startAutoSlide);
    carousel.addEventListener("focusin", stopAutoSlide);
    carousel.addEventListener("focusout", (event) => {
      if (!carousel.contains(event.relatedTarget)) {
        startAutoSlide();
      }
    });

    showReview(0);
    startAutoSlide();

  } catch (error) {
    console.error("Reviews loading error:", error);
    list.textContent =
      "Reviews are temporarily unavailable. Please try again later.";
  }
}

async function submitReview(event) {
  event.preventDefault();

  const form = event.currentTarget;
  const button = form.querySelector('button[type="submit"]');
  const message = document.getElementById("review-form-message");

  button.disabled = true;
  message.textContent = "Submitting your review...";

  try {
    const response = await fetch(
      `${REVIEWS_SUPABASE_URL}/rest/v1/reviews`,
      {
        method: "POST",
        headers: {
          apikey: REVIEWS_SUPABASE_KEY,
          Authorization: `Bearer ${REVIEWS_SUPABASE_KEY}`,
          "Content-Type": "application/json",
          Prefer: "return=minimal"
        },
        body: JSON.stringify({
          customer_name:
            form.elements.customer_name.value.trim(),
          rating: Number(form.elements.rating.value),
          review_text:
            form.elements.review_text.value.trim(),
          status: "pending"
        })
      }
    );

    if (!response.ok) {
      throw new Error(
        `Supabase error ${response.status}: ${await response.text()}`
      );
    }

    form.reset();
    message.textContent =
      "Thank you! Your review has been submitted for approval.";

  } catch (error) {
    console.error("Review submission error:", error);
    message.textContent = error.message;
  } finally {
    button.disabled = false;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("review-form");

  if (form) {
    form.addEventListener("submit", submitReview);
  }

  loadApprovedReviews();
});
