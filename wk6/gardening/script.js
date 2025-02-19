

function submitForm(event) {

    const namefield = document.getElementById('name');
    const nameValue = namefield.value;
    const emailField = document.getElementById('email');
    const emailValue = emailField.value;

    console.log(this.name.value);
    let error = "";

    if (nameValue === "") {
        error += "Name is required.\n";
    }

    if (emailValue === "") {
        error += "Email is required.\n";
    } else if (!validateEmail(emailValue)) {
        error += "Please enter valid email address.\n";
        // alert('Please enter a valid email address.');
        // return;
    }

    if (error) {
        event.preventDefault();
        document.getElementById("form-error").textContent = error;

    }

    console.log('Email is valid proceeding with form submission.')

}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

document.getElementById("contact-form").addEventListener("submit",  submitForm);