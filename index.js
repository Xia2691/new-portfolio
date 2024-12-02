document.addEventListener("DOMContentLoaded", () => {
  const sun = document.querySelector(".theme-switch .sun");
  const moon = document.querySelector(".theme-switch .moon");
  const body = document.body;

  sun.addEventListener("click", () => {
    body.classList.add("dark");
    sun.style.display = "none";
    moon.style.display = "block";
  });

  moon.addEventListener("click", () => {
    body.classList.remove("dark");
    moon.style.display = "none";
    sun.style.display = "block";
  });
});
