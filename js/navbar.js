function initNavbar() {
    const isLoggedIn = localStorage.getItem("loggedIn");

    const avatarMenu = document.getElementById("avatarMenu");
    const loginBtn = document.getElementById("loginBtn");
    const signupBtn = document.getElementById("signupBtn");
    const dropdown = document.getElementById("dropdownMenu");
    const logoutBtn = document.getElementById("logoutBtn");
    const avatar = document.getElementById("avatar");
    const hamburger = document.querySelector(".hamburger");
    const middle = document.querySelector(".middle");

    if (!avatarMenu) return;

    // Show/hide login/signup vs avatar
    if (isLoggedIn === "true") {
        avatarMenu.style.display = "block";
        signupBtn.style.display = "none";
    } else {
        avatarMenu.style.display = "none";
        signupBtn.style.display = "inline-block";
    }

    // Avatar dropdown toggle
    avatar.addEventListener("click", e => {
        e.stopPropagation();
        dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
    });

    document.addEventListener("click", () => {
        dropdown.style.display = "none";
    });

    // Logout
    logoutBtn.addEventListener("click", () => {
        localStorage.removeItem("loggedIn");
        location.reload();
    });

    // Hamburger toggle
    hamburger.addEventListener("click", () => {
        middle.classList.toggle("active");
    });

    // Highlight current page in navbar
    const navLinks = document.querySelectorAll('#navMenu a');
    const currentPage = window.location.pathname.split("/").pop(); 

    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage) {
            link.classList.add('active'); 
        } else {
            link.classList.remove('active');
        }
    });
}

// Initialize navbar after DOM loaded
document.addEventListener("DOMContentLoaded", initNavbar);

