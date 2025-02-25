
function onClick() {
    const menuBtn = document.querySelector('.menu');
    const dropdownContent = document.querySelector('.dropdownContent');

    menuBtn.addEventListener("click", (e) => {
        const isVisible = dropdownContent.classList.toggle("visible");
        menuBtn.setAttribute("aria-expanded", isVisible);
        e.stopPropagation();
    })

    document.addEventListener("click", (event) => {
        if (menuBtn.contains(event.target) && !dropdownContent.contains(event.target)) {
            const isVisible = dropdownContent.classList.toggle("visible");
            menuBtn.setAttribute("aria-expanded", isVisible);
        }});
}




const container = document.querySelector('.container');
container.style.display = "flex";
container.style.flexWrap = "wrap";
container.style.gap = "10px";
container.style.marginTop = "20px";

function createCircles(number) {
    for (let i = 0; i < number; i++) {
        let circle = document.createElement('div');
        circle.classList.add('circle')
        circle.style.width = "30px";
        circle.style.height = "30px";
        circle.style.backgroundColor = randomColor();
        circle.style.borderRadius = "50%";
        circle.style.display = "inline-block";
        circle.style.animationDelay = `${i * 0.2}s`;

        circle.addEventListener('click', () => {
            // circle.style.animationPlayState = "paused";
            circle.style.backgroundColor = randomColor();
        });

        container.appendChild(circle);
    }

    
}

function randomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`
}

function getNumber() {
    const input = document.querySelector('.number');
    const number = parseInt(input.value, 10);
    createCircles(number);
    console.log(number)
}

function renderCircles() {
    const numberForm = document.querySelector('.numberForm');
    numberForm.addEventListener('submit', function (event) {
        event.preventDefault();
        getNumber();
    })
}

function resetCircles() {
    const reset = document.querySelector('.reset-btn');
    reset.addEventListener('click', () => {
        container.innerHTML = '';
    })
}

// function changeCircle() {
//     const circle = document.querySelector('.circle');
//     circle.addEventListener('click', () => {
//         circle.style.animationPlayState = "paused";
//         circle.style.backgroundColor = randomColor();
//     })
// }

// createCircles(600);
// getNumber();
renderCircles();
resetCircles();
onClick();
// changeCircle();