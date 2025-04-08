function toggleDarkMode() {
  document.body.classList.toggle("dark");
  const isDark = document.body.classList.contains("dark");
  localStorage.setItem("darkMode", isDark);
  document.getElementById("darkToggle").textContent = isDark ? "🌙" : "🌞";
}

function setupDarkMode() {
  const dark = localStorage.getItem("darkMode") === "true";
  if (dark) document.body.classList.add("dark");
  document.getElementById("darkToggle").textContent = dark ? "🌙" : "🌞";
}

function toggleMenu() {
  document.getElementById("slideMenu").classList.add("open");
  document.getElementById("overlay").style.display = "block";
}

function closeMenu() {
  document.getElementById("slideMenu").classList.remove("open");
  document.getElementById("overlay").style.display = "none";
}

function setupSharedFeatures() {
  setupDarkMode();
}
