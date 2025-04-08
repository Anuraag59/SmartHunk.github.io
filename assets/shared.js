// Load shared header and footer
document.addEventListener("DOMContentLoaded", () => {
  fetch("/assets/header.html")
    .then(res => res.text())
    .then(data => {
      document.getElementById("header").innerHTML = data;
      setupSharedFeatures(); // after loading header
    });

  fetch("/assets/footer.html")
    .then(res => res.text())
    .then(data => {
      document.getElementById("footer").innerHTML = data;
    });
});
