//Data validation

document.getElementById("contact-form").addEventListener("submit", (event)=> {
    const contactForm = event.target
    if (!validateContactForm(contactForm)){
        event.preventDefault();
        displayError(contactForm, 'Invalid Input')
    }
});

//Valid email and phone number
function isValidEmail(email){
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    return emailRegex.text(email);
}

function isValidPhoneNumber(phone){
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phone);
}

//Checking form
function validateContactForm(contactForm){
    const name = contactForm["name"].value;
    const email = contactForm["email"].value;
    const phone = contactForm["phone"].value;
    const message = contactForm["message"].value;

    if (!name || !email || !message){
        return false;
    }
    if(!isValidEmail(email) || !isValidPhoneNumber(phone)){
        return false
    }
    return true;
}

function displayError(formElement, message){
    const errorElement = formElement.getElementByClassName("form-error")[0];
    errorElement.innerHTML = message;
    errorElement.style.display = "block";
}
