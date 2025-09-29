const nav = document.querySelector(".js-nav");
const navOpen = document.querySelector(".js-open");
const navClose = document.querySelector(".js-close");
const themeToggle = document.querySelector(".js-theme-toggle");
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
initMobile(); // run once immediately

const THEME_KEY = "THEME";
const getStoredTheme = () => localStorage.getItem(THEME_KEY);
const setStoredTheme = (theme) => localStorage.setItem(THEME_KEY, theme);
const darkModeQuery = window.matchMedia("(prefers-color-scheme: dark)");
const getPreferredTheme = () => {
  const storedTheme = getStoredTheme();
  if (storedTheme !== null) return storedTheme;
  return darkModeQuery.matches ? "dark" : "light";
};
const setTheme = (theme) => {
  document.documentElement.setAttribute("data-theme", theme);
  setStoredTheme(theme);
};
setTheme(getPreferredTheme()); // run once immediately
darkModeQuery.addEventListener("change", () => {
  if (getStoredTheme() === null) setTheme(getPreferredTheme());
});
const toggleDarkMode = () => {
  const newTheme = getPreferredTheme() === "light" ? "dark" : "light";
  setTheme(newTheme);
};

navOpen.addEventListener("click", openNav);
navClose.addEventListener("click", closeNav);
themeToggle.addEventListener("click", toggleDarkMode);
window.addEventListener("resize", initMobile);

year.textContent = new Date().getFullYear();
