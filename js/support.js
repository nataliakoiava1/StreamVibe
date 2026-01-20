const form = document.getElementById("supportForm");
const terms = document.getElementById("terms");
const popup = document.getElementById("popup");
const popupText = document.getElementById("popupText");

function showPopup(message, success = true) {
    popupText.textContent = message;
    popup.style.borderColor = success ? "lime" : "red";
    popup.classList.add("show");

    setTimeout(() => {
        popup.classList.remove("show");
    }, 3000);
}

function closePopup() {
    popup.classList.remove("show");
}

form.addEventListener("submit", function (e) {
    e.preventDefault();

    if (!terms.checked) {
        showPopup("❌ Please agree to the Terms and Privacy Policy first.", false);
        return;
    }

    showPopup("✅ Message delivered successfully!");
    form.reset();
});
