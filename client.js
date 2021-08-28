// Form submission validation and emailing
function submitForm(name, email, msg) {
    if (isValidEmail()) {
        email.send({
            Host: "smtp.datascienceunion.com",
            Username: ""
        })
    }
}