const btNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".navbar");

btNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});
