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

function getLastPerson(){
    let peopleJSON = JSON.parse(localStorage.getItem("people"));
    if(peopleJSON == null || peopleJSON.length == 0){
        let person = {
            name: "",
            lastName: "",
            email: "",
            message: ""
        }
        return person;
    }
    return peopleJSON[peopleJSON.length - 1];
}


function showPerson(){
    let person = getLastPerson();
    console.log(person)
    document.getElementById("fullName").innerText = person.name + " " + person.lastName;
    document.getElementById("email").innerText = person.email;
    document.getElementById("message").innerText = person.message;
}

document.addEventListener("DOMContentLoaded", function() {
    showPerson();
});

