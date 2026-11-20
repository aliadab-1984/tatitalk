const reviews = [
  ["خانم معلم، با صبر و حوصله و روش عالی فرزندم عاشق کلاس‌های شماست.", "– مریم محمدی"],
  ["روش بازی‌محور کلاس باعث شده فرزندم با علاقه انگلیسی تمرین کند.", "– مادر یکی از زبان‌آموزان"],
  ["از خلاقیت و انرژی شما در آموزش کودکان سپاسگزاریم.", "– یکی از والدین"]
];
let reviewIndex = 0;
function showReview(step) {
  reviewIndex = (reviewIndex + step + reviews.length) % reviews.length;
  document.getElementById("reviewText").textContent = reviews[reviewIndex][0];
  document.getElementById("reviewAuthor").textContent = reviews[reviewIndex][1];
}
document.getElementById("prevReview").addEventListener("click", () => showReview(-1));
document.getElementById("nextReview").addEventListener("click", () => showReview(1));
