
const REVIEWS_SUPABASE_URL = "https://otsdkbnneyjxeawoujtf.supabase.co";
const REVIEWS_REVIEWS_SUPABASE_KEY = "sb_publishable_ZEgbViwjQFEfgXiDL8M0tg_Fy0Rsua1";

async function loadApprovedReviews() {
  const list = document.getElementById("reviews-list");
  if (!list) return;

  try {
    const response = await fetch(
      `${SUPABASE_URL}/rest/v1/reviews?select=customer_name,rating,review_text,created_at&status=eq.approved&order=created_at.desc`,
      {
        headers: {
          apikey: REVIEWS_SUPABASE_KEY,
          Authorization: `Bearer ${REVIEWS_SUPABASE_KEY}`
        }
      }
    );

    if (!response.ok) throw new Error("Could not load reviews");

    const reviews = await response.json();
    list.replaceChildren();

    if (reviews.length === 0) {
      list.textContent = "Be the first to share your travel experience.";
      return;
    }

    reviews.forEach((review) => {
      const card = document.createElement("article");
      card.className = "review-card";

      const name = document.createElement("h3");
      name.textContent = review.customer_name;

      const stars = document.createElement("p");
      stars.className = "review-stars";
      stars.textContent = "★".repeat(review.rating) + "☆".repeat(5 - review.rating);
      stars.setAttribute("aria-label", `${review.rating} out of 5 stars`);

      const message = document.createElement("p");
      message.textContent = review.review_text;

      card.append(name, stars, message);
      list.appendChild(card);
    });
  } catch (error) {
    list.textContent = "Reviews are temporarily unavailable. Please try again later.";
    console.error(error);
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
    const response = await fetch(`${SUPABASE_URL}/rest/v1/reviews`, {
      method: "POST",
      headers: {
        apikey: REVIEWS_SUPABASE_KEY,
        Authorization: `Bearer ${REVIEWS_SUPABASE_KEY}`,
        "Content-Type": "application/json",
        Prefer: "return=minimal"
      },
      body: JSON.stringify({
        customer_name: form.elements.customer_name.value.trim(),
        rating: Number(form.elements.rating.value),
        review_text: form.elements.review_text.value.trim(),
        status: "pending"
      })
    });

    if (!response.ok) {
  throw new Error(`Supabase error ${response.status}: ${await response.text()}`);
}

    form.reset();
    message.textContent =
      "Thank you! Your review has been submitted for approval.";
  } catch (error) {
    message.textContent = error.message;
    console.error(error);
  } finally {
    button.disabled = false;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("review-form");
  if (form) form.addEventListener("submit", submitReview);
  loadApprovedReviews();
});

