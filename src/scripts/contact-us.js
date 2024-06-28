function redirectContact(){
    window.location.href = "contact-us.html";
}

function redirectHome(){
    window.location.href = "home.html";
}

function redirectFacebook(){
    window.open("https://www.facebook.com", "_blank");
}

function redirectTwitter(){
    window.open("https://www.twitter.com", "_blank");
}

function redirectInstagram(){
    window.open("https://www.instagram.com", "_blank");
}

function redirectLinkedIn(){
    window.open("https://www.linkedin.com", "_blank");
}

function validadeName(name){
    let regex = /^[a-zA-ZÀ-ÖØ-öø-ÿ\s]+$/
    return regex.test(name) && name.length >0;
}

function validateEmail(email){
    let regex = /\S+@\S+\.\S+/
    return regex.test(email);
}

function validateMessage(message){
    return message.length >= 10;
}

function validateForm(name, lastName, email, message){

    if(!validadeName(name)){
        return "Invalid Name!";
    }

    if(!validadeName(lastName)){
        return "Invalid Last Name!";
    }

    if(!validateEmail(email)){
        return "Invalid Email!";
    }

    if(!validateMessage(message)){
        return "Invalid Message!";
    }

    return true;
}

function saveInfo(name, lastName, email, message){

    let person = {
        name: name,
        lastName: lastName,
        email: email,
        message: message
    }

    let people = JSON.parse(localStorage.getItem("people")) || [];
    people.push(person);

    localStorage.setItem("people", JSON.stringify(people));
    window.location.href = "success.html";
}

document.addEventListener("DOMContentLoaded", function () {
    const emailInput = document.getElementById("email-input");
    const continueButton = document.getElementById("continue-button");

    emailInput.addEventListener("input", function () {
        if (emailInput.value.trim() === "") {
            continueButton.disabled = true;
        } else {
            continueButton.disabled = false;
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const nameInput = document.getElementById("name");
    const lastNameInput = document.getElementById("lastName");
    const emailInput = document.getElementById("email");
    const messageInput = document.getElementById("message");
    const getInTouchButton = document.getElementById("get-in-touch-button");
    const errorName = document.getElementById("error-first-name");
    const errorLastName = document.getElementById("error-last-name");
    const errorEmail = document.getElementById("error-email");
    const errorMessage = document.getElementById("error-message");

    const emailInput2 = document.getElementById("email-input");
    const continueButton = document.getElementById("continue-button");
    const hideReceived = document.getElementById("hide-received");

    let isNameInputTouched = false;
    let isLastNameInputTouched = false;
    let isEmailInputTouched = false;
    let isMessageInputTouched = false;

    function validateForm() {
        let validator = true;

        if (isNameInputTouched && !validadeName(nameInput.value.trim())) {
            errorName.style.visibility = "visible";
            validator = false;
        } else {
            errorName.style.visibility = "hidden";
        }

        if (isLastNameInputTouched && !validadeName(lastNameInput.value.trim())) {
            errorLastName.style.visibility = "visible";
            validator = false;
        } else {
            errorLastName.style.visibility = "hidden";
        }

        if (isEmailInputTouched && !validateEmail(emailInput.value.trim())) {
            errorEmail.style.visibility = "visible";
            validator = false;
        } else {
            errorEmail.style.visibility = "hidden";
        }

        if (isMessageInputTouched && !validateMessage(messageInput.value.trim())) {
            errorMessage.style.visibility = "visible";
            validator = false;
        } else {
            errorMessage.style.visibility = "hidden";
        }

        getInTouchButton.disabled = !validator;
        return validator;
    }

    nameInput.addEventListener("focus", () => {
        isNameInputTouched = true;
    });
    lastNameInput.addEventListener("focus", () => {
        isLastNameInputTouched = true;
    });
    emailInput.addEventListener("focus", () => {
        isEmailInputTouched = true;
    });
    messageInput.addEventListener("focus", () => {
        isMessageInputTouched = true;
    });

    nameInput.addEventListener("input", () => {
        validateForm();
    });
    lastNameInput.addEventListener("input", () => {
        validateForm();
    });
    emailInput.addEventListener("input", () => {
        validateForm();
    });
    messageInput.addEventListener("input", () => {
        validateForm();
    });

    getInTouchButton.addEventListener("click", function(event) {
        event.preventDefault();
        const isValid = validateForm();
        if (isValid) {
            saveInfo(nameInput.value, lastNameInput.value, emailInput.value, messageInput.value);
            window.location.href = "success.html";
        }
    });

    validateForm(); 

    continueButton.addEventListener("click", function (e) {
        e.preventDefault();
        hideReceived.style.visibility = "visible";
        emailInput2.value = "";
        let emailList = JSON.parse(localStorage.getItem("emailList")) || [];
        emailList.push(emailInput2.value.trim());
        localStorage.setItem("emailList", JSON.stringify(emailList));
        continueButton.disabled = true;
        setTimeout(function () {
            hideReceived.style.visibility = "hidden";
        }, 3000);
    });
});