const sideMenu = document.getElementById('sideMenu');
const overlay = document.getElementById('overlay');
const darkModeBtn = document.getElementById('darkModeBtn');

function toggleMenu() {
  sideMenu.classList.toggle('menu-open');
  overlay.classList.toggle('active');
}

overlay?.addEventListener('click', () => {
  sideMenu.classList.remove('menu-open');
  overlay.classList.remove('active');
});

function setDarkMode(on) {
  document.body.classList.toggle('dark-mode', on);
  sideMenu?.classList.toggle('dark-mode', on);
  if (darkModeBtn) darkModeBtn.textContent = on ? '☀️' : '🌙';
  localStorage.setItem('darkMode', on);
}

darkModeBtn?.addEventListener('click', () => {
  const isDark = document.body.classList.contains('dark-mode');
  setDarkMode(!isDark);
});

window.addEventListener('DOMContentLoaded', () => {
  const saved = localStorage.getItem('darkMode') === 'true';
  setDarkMode(saved);
});
