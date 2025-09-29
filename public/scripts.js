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
const THEMES = ["dark", "light", "system"];
const getStoredTheme = () => localStorage.getItem(THEME_KEY) ?? THEMES[0];
const setStoredTheme = (theme) => localStorage.setItem(THEME_KEY, theme);
const darkModeQuery = window.matchMedia("(prefers-color-scheme: dark)");
const getSystemTheme = () => (darkModeQuery.matches ? "dark" : "light");
const setTheme = (theme) => {
  setStoredTheme(theme);
  if (theme === "system") {
    document.documentElement.setAttribute("data-theme", getSystemTheme());
    document.documentElement.setAttribute("data-theme-mode", "auto");
  } else {
    document.documentElement.setAttribute("data-theme", theme);
    document.documentElement.setAttribute("data-theme-mode", "manual");
  }
  themeToggle.setAttribute("title", `Change theme (current: ${getStoredTheme()})`);
};
setTheme(getStoredTheme()); // run once immediately
darkModeQuery.addEventListener("change", () => {
  if (getStoredTheme() === "system") {
    setTheme("system"); // Re-apply to get new system theme
  }
});
const changeTheme = () => {
  const currentTheme = getStoredTheme();
  const currentIndex = THEMES.indexOf(currentTheme);
  const nextIndex = (currentIndex + 1) % THEMES.length;
  setTheme(THEMES[nextIndex]);
};

navOpen.addEventListener("click", openNav);
navClose.addEventListener("click", closeNav);
themeToggle.addEventListener("click", changeTheme);
window.addEventListener("resize", initMobile);

year.textContent = new Date().getFullYear();
