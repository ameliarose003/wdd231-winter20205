let userNameElement = ""
function formTemplate(userName) {
    return `
    <h2>Congratulations ${userName}, you have been signed up!</h2>
    `
};

function renderForm(userName) {
    const celebrate = document.querySelector(".celebration");
    celebrate.innerHTML = formTemplate(userName)
}

document.querySelector("#signUpForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const userInputElement = document.querySelector("#name");
    userNameElement = userInputElement.value.trim();
    if (userNameElement) {

        renderForm(userNameElement);
    }
    userInputElement.value ="";
})