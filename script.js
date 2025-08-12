// script.js
document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault(); // Stop page refresh

    let isValid = true;

    // Get inputs
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const message = document.getElementById("message");

    // Clear old error messages
    document.querySelectorAll(".error-message").forEach(msg => msg.textContent = "");

    // Name validation
    if (name.value.trim() === "") {
        document.querySelector("#name + .error-message").textContent = "Name is required.";
        isValid = false;
    }

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email.value.trim() === "") {
        document.querySelector("#email + .error-message").textContent = "Email is required.";
        isValid = false;
    } else if (!emailPattern.test(email.value.trim())) {
        document.querySelector("#email + .error-message").textContent = "Enter a valid email.";
        isValid = false;
    }

    // Message validation
    if (message.value.trim() === "") {
        document.querySelector("#message + .error-message").textContent = "Message cannot be empty.";
        isValid = false;
    }

    // If valid, show success
    if (isValid) {
        document.getElementById("successMessage").textContent = "Form submitted successfully!";
        this.reset();
    } else {
        document.getElementById("successMessage").textContent = "";
    }
});

