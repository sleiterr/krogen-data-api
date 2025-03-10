// BURGER-BTTN

export function initBurgerMenu() {
  const hamburger = document.querySelector(".burger-btn");
  const navUL = document.querySelector(".nav-menu");
  const bars = document.querySelectorAll(".bar");

  hamburger.addEventListener("click", () => {
    navUL.classList.toggle("show");
    bars.forEach((element) => {
      element.classList.toggle("active");
    });
  });

  navUL.addEventListener("click", () => {
    navUL.classList.remove("show");
    bars.forEach((element) => {
      element.classList.remove("active");
    });
  });
}
