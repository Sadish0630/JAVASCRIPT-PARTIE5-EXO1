const login = () => {

    if (password1.value == password2.value) {
        password1.style.borderColor="green";
        password2.style.borderColor="green";
    } else {
        password1.style.borderColor = "red";
        password2.style.borderColor = "red";
    }
}