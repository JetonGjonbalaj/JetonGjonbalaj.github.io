const themeToggle = document.querySelector("[data-theme-toggle]");
const root = document.documentElement;

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

const currentYear = document.querySelector("[data-current-year]");

if (currentYear) {
  currentYear.textContent = new Date().getFullYear();
}
