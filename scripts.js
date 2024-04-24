const nav = document.querySelector(".nav");
const navOpen = document.querySelector("#open");
const navClose = document.querySelector("#close");
const year = document.querySelector("#year");

const toggleNav = (open) => {
  nav.setAttribute("aria-hidden", !open);
  navOpen.setAttribute("aria-expanded", open);
  navClose.setAttribute("aria-expanded", open);
};
const openNav = () => {
  toggleNav(true);
};
const closeNav = () => {
  toggleNav(false);
};

const initMobile = () => {
  if (window.innerWidth < 600) {
    nav.setAttribute("aria-hidden", "true");
    navOpen.setAttribute("aria-expanded", "false");
    navClose.setAttribute("aria-expanded", "false");
  } else {
    nav.removeAttribute("aria-hidden");
    navOpen.removeAttribute("aria-expanded");
    navClose.removeAttribute("aria-expanded");
  }
};

navOpen.addEventListener("click", openNav);
navClose.addEventListener("click", closeNav);
window.addEventListener("resize", initMobile);
initMobile();

year.textContent = new Date().getFullYear();
