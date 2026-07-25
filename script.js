const themeToggle = document.querySelector("[data-theme-toggle]");
const themeToggleLabel = document.querySelector("[data-theme-label]");
const root = document.documentElement;

function setTheme(theme) {
  const isDark = theme === "dark";

  root.classList.toggle("dark", isDark);
  themeToggle.setAttribute("aria-pressed", String(isDark));
  themeToggle.setAttribute("aria-label", `Switch to ${isDark ? "light" : "dark"} theme`);
  themeToggleLabel.textContent = isDark ? "Light" : "Dark";
  localStorage.setItem("theme", theme);
}

themeToggle.addEventListener("click", () => {
  setTheme(root.classList.contains("dark") ? "light" : "dark");
});

document.querySelector("[data-current-year]").textContent = new Date().getFullYear();
