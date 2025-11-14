// XSS Prevention: encode unsafe characters
function sanitizeInput(str) {
    return str.replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#x27;");
}

function validateForm() {
    let fname = sanitizeInput(document.getElementById("fname").value.trim());
    let lname = sanitizeInput(document.getElementById("lname").value.trim());
    let email = sanitizeInput(document.getElementById("email").value.trim());
    let password = document.getElementById("password").value.trim();
    let confirmPassword = document.getElementById("confirmPassword").value.trim();

    let error = "";

    if (!fname || !lname || !email || !password || !confirmPassword) {
        error += "All fields must be filled.<br>";
    }

    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        error += "Enter a valid email address.<br>";
    }

    if (password !== confirmPassword) {
        error += "Passwords do not match.<br>";
    }

    document.getElementById("error").innerHTML = error;

    if (error !== "") {
        return false;
    }

    alert("Form submitted successfully!");
    return true;
}
