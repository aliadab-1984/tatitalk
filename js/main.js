const reviews = [
  ["خانم معلم، با صبر و حوصله و روش عالی فرزندم عاشق کلاس‌های شماست.", "– مریم محمدی"],
  ["روش بازی‌محور کلاس باعث شده فرزندم با علاقه انگلیسی تمرین کند.", "– مادر یکی از زبان‌آموزان"],
  ["از خلاقیت و انرژی شما در آموزش کودکان سپاسگزاریم.", "– یکی از والدین"]
];
let reviewIndex = 0;
function showReview(step) {
  const reviewText = document.getElementById("reviewText");
  const reviewAuthor = document.getElementById("reviewAuthor");

  reviewText.style.opacity = 0;
  reviewAuthor.style.opacity = 0;

  setTimeout(() => {
    reviewIndex = (reviewIndex + step + reviews.length) % reviews.length;

    reviewText.textContent = reviews[reviewIndex][0];
    reviewAuthor.textContent = reviews[reviewIndex][1];

    reviewText.style.opacity = 1;
    reviewAuthor.style.opacity = 1;
  }, 500);
}
document.getElementById("prevReview").addEventListener("click", () => showReview(-1));
document.getElementById("nextReview").addEventListener("click", () => showReview(1));
const revealElements = document.querySelectorAll('.card');

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.1
});

revealElements.forEach((element) => {
    element.classList.add('reveal');
    observer.observe(element);
});
const heroTitle = document.getElementById("hero-title");

const heroMessages = [
    "با من، قدم به دنیای<br>انگلیسی! 💗",
    "تاتی تاتی انگلیسی<br>صحبت کن! 💗"
];

let heroMessageIndex = 0;

setInterval(() => {
    heroTitle.style.opacity = 0;

    setTimeout(() => {
        heroMessageIndex = (heroMessageIndex + 1) % heroMessages.length;
        heroTitle.innerHTML = heroMessages[heroMessageIndex];
        heroTitle.style.opacity = 1;
    }, 600);

}, 4000);
