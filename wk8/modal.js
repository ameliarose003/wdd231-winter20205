const openModalBtn = document.querySelector("#open-modal");
const modal = document.querySelector(".modal");
openModalBtn.addEventListener("click", () => {
    modal.classList.add('show');
});