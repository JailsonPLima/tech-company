const menu = document.querySelector(".m-menu");
const nav = document.querySelector(".m-nav");
const links = [...document.querySelectorAll(".m-link")];
const favicon = document.getElementById("favicon");
const isDark = window.matchMedia("(prefers-color-scheme: dark)");

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

const setFavicon = () => {
  if (isDark) favicon.href = "./logo-dark.ico";
  else favicon.href = "./logo-light.ico";
};

setFavicon();