const tabs = document.querySelectorAll(".tab");
const teacherGrid = document.querySelector(".teacher-grid");
const studentsArea = document.querySelector(".students-area");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((item) => item.classList.remove("active"));
    tab.classList.add("active");

    const target = tab.dataset.target;
    if (target === "teacher-books") {
      teacherGrid.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      studentsArea.scrollIntoView({ behavior: "smooth", block: "start" });
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
