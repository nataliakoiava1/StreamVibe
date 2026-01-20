
// login

const loginForm = document.getElementById("loginForm");

if (loginForm) {
    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const emailInput = document.getElementById("loginEmail");
        const passwordInput = document.getElementById("loginPassword");

        const emailError = document.getElementById("loginEmailError");
        const passwordError = document.getElementById("loginPasswordError");

        emailError.textContent = "";
        passwordError.textContent = "";
        emailInput.classList.remove("error-border");
        passwordInput.classList.remove("error-border");

        const storedUser = JSON.parse(localStorage.getItem("user"));

        if (!storedUser) {
            emailError.textContent = "No account found";
            emailInput.classList.add("error-border");
            return;
        }

        if (emailInput.value !== storedUser.email) {
            emailError.textContent = "Email does not match";
            emailInput.classList.add("error-border");
            return;
        }

        if (passwordInput.value !== storedUser.password) {
            passwordError.textContent = "Password does not match";
            passwordInput.classList.add("error-border");
            return;
        }

        localStorage.setItem("loggedIn", "true");
        window.location.href = "index.html";
    });
}


// sign up
const signupForm = document.getElementById("signupForm");

if (signupForm) {
    signupForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const emailInput = document.getElementById("signupEmail");
        const passwordInput = document.getElementById("signupPassword");
        const nameInput = document.getElementById("signupName")

        const emailError = document.getElementById("signupEmailError");
        const passwordError = document.getElementById("signupPasswordError");

        emailError.textContent = "";
        passwordError.textContent = "";
        emailInput.classList.remove("error-border");
        passwordInput.classList.remove("error-border");

        const user = {
            name: nameInput.value,
            email: emailInput.value,
            password: passwordInput.value
        };

        localStorage.setItem("user", JSON.stringify(user));
        window.location.href = "login.html";
    });
}
