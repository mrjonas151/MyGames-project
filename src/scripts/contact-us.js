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

    if(!validateEmail(email)){
        return "Invalid Email!";
    }

    if(!validateMessage(message)){
        return "Invalid Message!";
    }

    return true;
}

function saveInfo(){
    let name = document.getElementById("name").value;
    let lastName = document.getElementById("lastName").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    const validate = validateForm(name, lastName, email, message);

    let person = {
        name: name,
        lastName: lastName,
        email: email,
        message: message
    }

    let personJSON = JSON.stringify(person);

    localStorage.setItem("person", personJSON);

    if(validate === true){
        window.location.href = "success.html";
    }

    if(validate === "Invalid Name!"){
        alert("Invalid Name!");
    }else if(validate==="Invalid Email!"){
        alert("Invalid Email!");
    }else if(validate==="Invalid Message!"){
        alert("Invalid Message! (Min 10 characters)");
    }
}