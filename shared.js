function toggleDarkMode() {
  const body = document.body;
  body.classList.toggle("dark-mode");
  const isDark = body.classList.contains("dark-mode");
  localStorage.setItem("darkMode", isDark);
  document.getElementById("darkModeIcon").className = isDark ? "fas fa-sun" : "fas fa-moon";
}

function loadDarkMode() {
  const isDark = localStorage.getItem("darkMode") === "true";
  if (isDark) {
    document.body.classList.add("dark-mode");
    document.getElementById("darkModeIcon").className = "fas fa-sun";
  }
}

function toggleMenu() {
  document.getElementById("slideMenu").classList.toggle("open");
}

window.addEventListener("click", function (e) {
  const menu = document.getElementById("slideMenu");
  const icon = document.querySelector(".menu-icon");
  if (!menu.contains(e.target) && !icon.contains(e.target)) {
    menu.classList.remove("open");
  }
});

window.addEventListener("DOMContentLoaded", () => {
  fetch("../assets/header.html")
    .then(res => res.text())
    .then(data => document.body.insertAdjacentHTML("afterbegin", data))
    .then(loadDarkMode);

  fetch("../assets/footer.html")
    .then(res => res.text())
    .then(data => document.body.insertAdjacentHTML("beforeend", data));
});