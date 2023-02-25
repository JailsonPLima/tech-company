console.log("app start");

const menu = document.querySelector(".m-menu");
const nav = document.querySelector(".m-nav");

function toggleMenuAndNav() {
  menu.classList.toggle("is-active");
  nav.classList.toggle("is-active");
}

menu.addEventListener("click", toggleMenuAndNav);
