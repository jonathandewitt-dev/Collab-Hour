const nav = document.querySelector(".js-nav");
const navOpen = document.querySelector(".js-open");
const navClose = document.querySelector(".js-close");
const year = document.querySelector(".js-year");

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
