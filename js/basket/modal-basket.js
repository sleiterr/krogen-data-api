export const basketModal = () => {
  const modal = {
    openModalBtn: document.querySelector("#basket-open"),
    // closeModalBtn: document.querySelector("")
    modal: document.querySelector("#basket-backdrop"),
    body: document.body,
  };

  modal.openModalBtn.addEventListener("click", (e) => {
    e.preventDefault();
    openModal();
  });

  modal.modal.addEventListener("click", (e) => {
    if (e.target === modal.modal) closeModal();
  });

  function openModal() {
    modal.modal.classList.add("active");
    modal.body.classList.add("no-scroll");
    modal.modal.scrollTop = 0;
  }

  window.scrollTo({ top: 0, behavior: "smooth" });

  function closeModal() {
    modal.modal.classList.remove("active");
    modal.body.classList.remove("no-scroll");
  }
};
