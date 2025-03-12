export function accordionFaq() {
  const accordionContainer = document.querySelector(".accordion-container");

  // Якщо немає контейнера, просто вийти
  if (!accordionContainer) return;

  // Додаємо один обробник події на батьківський елемент
  accordionContainer.addEventListener("click", (e) => {
    // Перевірка, чи це клік по елементу з класом .accordion
    if (e.target.closest(".accordion")) {
      e.target.closest(".accordion").classList.toggle("active");
    }
  });
}
