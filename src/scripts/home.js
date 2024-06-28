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
        if (emailInput.value.trim() === "") {
            continueButton.disabled = true;
        } else {
            continueButton.disabled = false;
        }
    });

    continueButton.addEventListener("click", function (e) {
        e.preventDefault();
        hideReceived.style.visibility = "visible";
        emailInput.value = "";
        let emailList = JSON.parse(localStorage.getItem("emailList")) || [];
        emailList.push(emailInput.value.trim());
        localStorage.setItem("emailList", JSON.stringify(emailList));
        continueButton.disabled = true;
        setTimeout(function () {
            hideReceived.style.visibility = "hidden";
        }, 3000);
    });
});

