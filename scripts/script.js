const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirmPassword");
const userName = document.getElementById("firstName");
const email = document.getElementById("email");
const submit = document.querySelector(".login");
const form = document.getElementById("form");
const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const modeSwitch = document.querySelector(".mode-icon");

form.addEventListener('submit', e => {
    e.preventDefault();
    validateInputs();
})

modeSwitch.addEventListener('click', modeToggle);

function validateInputs() {

    if (password.value == "" || password.value == null) {
        callError(password, 'You have to set a password!');
    } else {
        callSuccess(password);
    }

    if (password.value != confirmPassword.value) {
        callError(confirmPassword, 'The passwords must match!');
    } else if (password.value == "" || password.value == null) {
        callError(confirmPassword, '');
    } else {
        callSuccess(confirmPassword);
    }

    if (userName.value == "" || userName.value == null) {
        callError(userName, 'We need to know your name!');
    } else {
        callSuccess(userName);
    }

    if (email.value.match(emailRegex)) {
        callSuccess(email);
    } else {
        callError(email, 'The email address is not valid!')
    }

    if (document.querySelectorAll('.button-success').length === 4) {
        form.submit();
    } 
}

function callError(selector, error) {
    const errorLabel = selector.nextElementSibling;
    errorLabel.innerText = error;

    selector.classList.remove("button-success")
    selector.classList.add("button-error");
}

function callSuccess(selector) {
    const errorLabel = selector.nextElementSibling;
    errorLabel.innerText = "";
    selector.classList.remove("button-error");
    selector.classList.add("button-success");
}

function modeToggle(e) {
    if (e.target.classList.contains("bi-brightness-high-fill")) {
        e.target.classList.remove("bi-brightness-high-fill");
        e.target.classList.add("bi-moon-fill");
        document.querySelector("body").classList.add("dark");
    } else {
        e.target.classList.remove("bi-moon-fill");  
        e.target.classList.add("bi-brightness-high-fill");   
        document.querySelector("body").classList.remove("dark");
    }
}