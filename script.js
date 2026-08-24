const themeToggle = document.querySelector("[data-theme-toggle]");
const siteNav = document.querySelector(".site-nav");
let menuToggle = document.querySelector("[data-menu-toggle]");
const root = document.documentElement;

if (!menuToggle && siteNav) {
  menuToggle = document.createElement("button");
  menuToggle.className = "menu-toggle";
  menuToggle.type = "button";
  menuToggle.setAttribute("data-menu-toggle", "");
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Open navigation menu");
  menuToggle.innerHTML = '<svg class="menu-icon menu-open-icon" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 6h16M4 12h16M4 18h16" /></svg><svg class="menu-icon menu-close" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 6 12 12M18 6 6 18" /></svg>';
  siteNav.insertBefore(menuToggle, siteNav.querySelector(".nav-links"));
}

function setMenu(isOpen) {
  siteNav.classList.toggle("menu-open", isOpen);
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Close navigation menu" : "Open navigation menu");
}

if (menuToggle && siteNav) {
  menuToggle.addEventListener("click", () => {
    setMenu(!siteNav.classList.contains("menu-open"));
  });

  siteNav.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", () => setMenu(false));
  });
}

function setTheme(theme) {
  const isDark = theme === "dark";

  root.classList.toggle("dark", isDark);
  root.style.colorScheme = isDark ? "dark" : "light";

  if (themeToggle) {
    themeToggle.setAttribute("aria-pressed", String(isDark));
    themeToggle.setAttribute("aria-label", `Switch to ${isDark ? "light" : "dark"} theme`);
  }

  localStorage.setItem("theme", theme);
}

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    setTheme(root.classList.contains("dark") ? "light" : "dark");
  });

  setTheme(root.classList.contains("dark") ? "dark" : "light");
}

const olderExperienceToggle = document.querySelector("[data-older-experience-toggle]");
const olderExperiences = document.querySelector("[data-older-experiences]");

if (olderExperienceToggle && olderExperiences) {
  olderExperiences.hidden = true;
  olderExperienceToggle.hidden = false;

  olderExperienceToggle.addEventListener("click", () => {
    const isExpanded = olderExperienceToggle.getAttribute("aria-expanded") === "true";
    const willExpand = !isExpanded;

    olderExperiences.hidden = !willExpand;
    olderExperienceToggle.setAttribute("aria-expanded", String(willExpand));
    olderExperienceToggle.textContent = willExpand ? "Hide older experiences" : "Show older experiences";
  });
}

const currentYear = document.querySelector("[data-current-year]");

if (currentYear) {
  currentYear.textContent = new Date().getFullYear();
}
