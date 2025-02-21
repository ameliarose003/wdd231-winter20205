function onClick() {
    const greenBtn = document.querySelector('.green');
    const dropDown = document.querySelector('.blue');

    greenBtn.addEventListener("click", () => {
        dropDown.classList.toggle("visible");
    })

}

onClick();