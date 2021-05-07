//! loading screen

const loadingScreen = document.querySelector("#loading");
const title = loadingScreen.querySelector(".shakeit");

function showBody() {
  loadingScreen.style.display = "none";
}
// showBody();

setTimeout(showBody, 1600);
