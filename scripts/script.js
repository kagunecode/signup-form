const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirmPassword");
const submit = document.querySelector(".login");
const form = document.getElementById("form");

form.addEventListener('submit', e => {
    e.preventDefault();
    validateInputs();
})

function validateInputs() {

    if (password.value == "" || password.value == null) {
        callError(password, 'You have to set a password!');
    } else {
        callSucess(password);
    }

    if (password.value != confirmPassword.value) {
        callError(confirmPassword, 'The passwords must match!');
    } else if (password.value == "" || password.value == null) {
        callError(confirmPassword, '');
    } else {
        callSucess(confirmPassword);
    }
}

function callError(selector, error) {
    const errorLabel = selector.nextElementSibling;
    errorLabel.innerText = error;

    selector.classList.remove("button-success")
    selector.classList.add("button-error");
}

function callSucess(selector) {
    const errorLabel = selector.nextElementSibling;
    errorLabel.innerText = "";
    selector.classList.remove("button-error");
    selector.classList.add("button-success");
}