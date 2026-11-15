
// Siddharth Elevators - JavaScript

// Display current year in footer
document.addEventListener("DOMContentLoaded", function () {

    const footer = document.querySelector("footer");

    if (footer) {
        footer.innerHTML =
            "© " + new Date().getFullYear() +
            " Siddharth Elevators. All Rights Reserved.";
    }

    // Welcome message
    console.log("Welcome to Siddharth Elevators Website!");

});
