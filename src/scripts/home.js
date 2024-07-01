function redirectContact(){
    window.location.href = "contact-us.html";
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

function redirectError(){
    window.location.href = "error.html";
}

function validateEmail(email){
    let regex = /\S+@\S+\.\S+/
    return regex.test(email);
}

document.addEventListener('DOMContentLoaded', function () {
    const emailInput = document.getElementById("email-input");
    const continueButton = document.getElementById("continue-button");
    const hideReceived = document.getElementById("hide-received");

    emailInput.addEventListener("input", function () {
        const email = emailInput.value.trim();
        if (email === "") {
            continueButton.disabled = true;
            hideReceived.style.visibility = "hidden";
        } else if (validateEmail(email)) {
            continueButton.disabled = false;
            hideReceived.style.visibility = "hidden";
        } else {
            continueButton.disabled = false;
            hideReceived.textContent = "Error! Invalid email.";
            hideReceived.style.color = "red";
            hideReceived.style.visibility = "visible";
        }
    });

    continueButton.addEventListener("click", function (e) {
        e.preventDefault();
        const email = emailInput.value.trim();

        if (validateEmail(email)) {
            let emailList = JSON.parse(localStorage.getItem("emailList")) || [];
            emailList.push(email);
            localStorage.setItem("emailList", JSON.stringify(emailList));
            emailInput.value = "";

            hideReceived.textContent = "Thanks, stay tuned to your inbox!!";
            hideReceived.style.color = "green";
            hideReceived.style.visibility = "visible";
        } else {
            hideReceived.textContent = "Error! Invalid email.";
            hideReceived.style.color = "red";
            hideReceived.style.visibility = "visible";
        }

        continueButton.disabled = true;
        setTimeout(function () {
            hideReceived.style.visibility = "hidden";
        }, 3000);
    });
});


