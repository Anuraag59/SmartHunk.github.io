// Inject header and footer
function includeHTML() {
  const elements = document.querySelectorAll('[include-html]');
  elements.forEach(el => {
    const file = el.getAttribute('include-html');
    fetch(file)
      .then(response => response.text())
      .then(data => {
        el.innerHTML = data;
        if (el.querySelector('[include-html]')) includeHTML();
      });
  });
}
includeHTML();

// Dark mode toggle
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("darkModeToggle");
  const body = document.body;
  const storedMode = localStorage.getItem("darkMode");

  if (storedMode === "enabled") {
    body.classList.add("dark-mode");
  }

  if (toggle) {
    toggle.addEventListener("click", () => {
      body.classList.toggle("dark-mode");
      localStorage.setItem("darkMode", body.classList.contains("dark-mode") ? "enabled" : "disabled");
    });
  }

  // Slide-in menu
  const menuToggle = document.getElementById("menuToggle");
  const slideMenu = document.getElementById("slideMenu");

  if (menuToggle && slideMenu) {
    menuToggle.addEventListener("click", () => {
      slideMenu.classList.toggle("open");
    });

    document.addEventListener("click", (event) => {
      if (!slideMenu.contains(event.target) && !menuToggle.contains(event.target)) {
        slideMenu.classList.remove("open");
      }
    });
  }
});
