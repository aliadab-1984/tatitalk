const tabs = document.querySelectorAll(".book-tab");
const teacherBooks = document.getElementById("teacher-books");
const studentBooks = document.getElementById("student-books");

tabs.forEach((tab) => {
    tab.addEventListener("click", (event) => {
        event.preventDefault();

        tabs.forEach((item) => item.classList.remove("active-tab"));
        tab.classList.add("active-tab");

        if (tab.classList.contains("teacher-tab")) {
            teacherBooks.style.display = "grid";
            studentBooks.style.display = "none";
        } else {
            teacherBooks.style.display = "none";
            studentBooks.style.display = "block";
        }
    });
});

const modal = document.getElementById("book-modal");
const modalTitle = document.getElementById("modal-title");
const modalDescription = document.getElementById("modal-description");

document.querySelectorAll(".details-btn").forEach((button) => {
  button.addEventListener("click", () => {
    modalTitle.textContent = button.dataset.title;
    modalDescription.textContent = button.dataset.description;
    modal.classList.add("show");
    modal.setAttribute("aria-hidden", "false");
  });
});

function closeModal() {
  modal.classList.remove("show");
  modal.setAttribute("aria-hidden", "true");
}

document.querySelector(".modal-close").addEventListener("click", closeModal);
modal.addEventListener("click", (event) => {
  if (event.target === modal) closeModal();
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeModal();
});
