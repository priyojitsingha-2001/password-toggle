const icon = document.querySelector("#eyeicon")
const password = document.querySelector("#password")

// for the input field text to be visible we nned to change the type to text
// and inorder to hide it we need to change the type back to password
icon.addEventListener("click", () => {
    if (password.type == "password") {
        password.type = "text"
        icon.src = "./images/eye-open.png"
    }
    else {
        password.type = "password"
        icon.src = "./images/eye-close.png"
    }

})