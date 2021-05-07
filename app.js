//! loading screen

const loadingScreen = document.querySelector("#loading");
const title = loadingScreen.querySelector(".shakeit");

function showBody() {
  loadingScreen.style.display = "none";
}

setTimeout(showBody, 1600);

//! dark mode
const body = document.querySelector("body");
const main = body.querySelector("body main");
const header = document.querySelector(".header");
const nav = document.querySelectorAll(".nav__menu-link2");
const hero = document.querySelector(".hero");
const provide = document.querySelector(".provide");
const review = document.querySelector(".review");
const subscription = document.querySelector(".subscription");
const register = document.querySelector(".register");
const footer = document.querySelector(".footer");
const footerLast = document.querySelector(".footer-last");
const toggleIcon = document.querySelector("#moon");
const toggleIcon2 = document.querySelector("#night");

function toggleDarkTheme() {
  body.classList.toggle("dark-theme");
  header.classList.toggle("dark-theme");
  hero.classList.toggle("dark-theme");
  provide.classList.toggle("dark-theme");
  review.classList.toggle("dark-theme");
  subscription.classList.toggle("dark-theme");
  register.classList.toggle("dark-theme");
  footer.classList.toggle("dark-theme");
  footerLast.classList.toggle("dark-theme");

  nav.forEach((item) => {
    if (body.classList.contains("dark-theme")) {
      item.style.color = "white";
    } else {
      item.style.color = "#000106";
    }
  });

  if (body.classList.contains("dark-theme")) {
    toggleIcon.src = "img/icons/sun-color.svg";
  } else {
    toggleIcon.src = "img/icons/night.svg";
  }
}

//! display modal
const modal = document.querySelector("#modal");
const modalClose = document.querySelector("#modal #close");

function toggleModal() {
  setTimeout(() => {
    modal.style.display = "block";
  }, 5100);
}
function closeModal() {
  modal.style.display = "none";
}

//! to the top
const topBTN = document.querySelector("#toTop");
function toTop() {
  window.scrollTo(0, 0);
}
function init() {
  toggleModal();
  toggleIcon.addEventListener("click", toggleDarkTheme);
  toggleIcon2.addEventListener("click", toggleDarkTheme);
  modalClose.addEventListener("click", closeModal);
  topBTN.addEventListener("click", toTop);
}
init();
