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