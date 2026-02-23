document.getElementById("year").textContent = new Date().getFullYear();

// Dark mode toggle with saved preference
(function () {
  const body = document.body;
  const btn = document.getElementById("theme-toggle");
  const STORAGE_KEY = "theme"; // "dark" or "light"

  if (!btn) return;

  // Apply saved theme, otherwise follow system preference
  const saved = localStorage.getItem(STORAGE_KEY);
  const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  if (saved === "dark" || (!saved && systemPrefersDark)) {
    body.classList.add("dark");
  }

  // Update button text/icon
  function updateButton() {
    const isDark = body.classList.contains("dark");
    btn.textContent = isDark ? "☀️ Light mode" : "🌙 Dark mode";
  }
  updateButton();

  // Toggle on click + save
  btn.addEventListener("click", () => {
    body.classList.toggle("dark");
    const isDark = body.classList.contains("dark");
    localStorage.setItem(STORAGE_KEY, isDark ? "dark" : "light");
    updateButton();
  });
})();