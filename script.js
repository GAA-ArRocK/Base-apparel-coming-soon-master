function mailCheck(inputMail) {
    const errorMessage = document.getElementsByClassName("error")[0];
    const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (inputMail.match(mailFormat)) {
        errorMessage.classList.remove("active");
        document.checkForm.email.value = ""
        // alert("Email " + inputMail + " has been added to the list. Thank you for participation!");
    }
    else {
        errorMessage.classList.add("active");
    }
}