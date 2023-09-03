const ourForm = document.querySelector(".login-form");
ourForm.addEventListener("submit", formEvent);

function formEvent(event) {
    event.preventDefault();
    const user = {};
    const {email, password} = event.currentTarget.elements;
    if (email.value === "" || password.value === "") {
        alert("Всі поля мають бути заповненими!");
        return;
    } else {
        user.email = email.value;
        user.password = password.value;
        console.log(user)
    };

    ourForm.reset();
    

}
