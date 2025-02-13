const foodArray = ["Apples", "Mashed Potatoes", "BBQ Bao Buns", "Pizza", "Ice Cream"];
const button = document.querySelector("button");

button.addEventListener("click", () => {
    foodArray.forEach((food, index) => {
        const element = document.getElementById((index + 1).toString());
        if (element) {
            element.innerHTML = food;
        }
    });
});

let a = 1
let b = ++a
a++
console.log(a);