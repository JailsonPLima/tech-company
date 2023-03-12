const menu = document.querySelector(".m-menu");
const nav = document.querySelector(".m-nav");
const links = [...document.querySelectorAll(".m-link")];

function toggleMenuAndNav() {
  menu.classList.toggle("is-active");
  nav.classList.toggle("is-active");
}

menu.addEventListener("click", toggleMenuAndNav);

function onFakeLinkClick() {
  alert("Esse link é somente para demostração.\nThis link is for demo only.");
}

links.map((element) => {
  element.addEventListener("click", onFakeLinkClick);
});
