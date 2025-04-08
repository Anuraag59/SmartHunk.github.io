document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("darkModeToggle");
  const menuToggle = document.getElementById("menuToggle");
  const slideMenu = document.getElementById("slideMenu");

  // Apply saved dark mode
  if (localStorage.getItem("darkMode") === "true") {
    document.body.classList.add("dark-mode");
    toggle.textContent = "☀️";
  }

  toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    const isDark = document.body.classList.contains("dark-mode");
    toggle.textContent = isDark ? "☀️" : "🌙";
    localStorage.setItem("darkMode", isDark);
  });

  menuToggle.addEventListener("click", () => {
    slideMenu.classList.toggle("open");
  });

  // Close menu on outside click
  window.addEventListener("click", (e) => {
    if (!slideMenu.contains(e.target) && !menuToggle.contains(e.target)) {
      slideMenu.classList.remove("open");
    }
  });
});
