const toggleBtn = document.createElement("button");
toggleBtn.id = "toggleMode";
toggleBtn.textContent = "🌙";
document.body.appendChild(toggleBtn);

toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    toggleBtn.textContent = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
});
