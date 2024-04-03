/*!
 * Start Bootstrap - Freelancer v7.0.7 (https://startbootstrap.com/theme/freelancer)
 * Copyright 2013-2023 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-freelancer/blob/master/LICENSE)
 */
//
// Scripts
//

window.addEventListener("DOMContentLoaded", (event) => {
  // Navbar shrink function
  var navbarShrink = function () {
    const navbarCollapsible = document.body.querySelector("#mainNav");
    if (!navbarCollapsible) {
      return;
    }
    if (window.scrollY === 0) {
      navbarCollapsible.classList.remove("navbar-shrink");
    } else {
      navbarCollapsible.classList.add("navbar-shrink");
    }
  };

  // Shrink the navbar
  navbarShrink();

  // Shrink the navbar when page is scrolled
  document.addEventListener("scroll", navbarShrink);

  // Activate Bootstrap scrollspy on the main nav element
  const mainNav = document.body.querySelector("#mainNav");
  if (mainNav) {
    new bootstrap.ScrollSpy(document.body, {
      target: "#mainNav",
      rootMargin: "0px 0px -40%",
    });
  }

  // Collapse responsive navbar when toggler is visible
  const navbarToggler = document.body.querySelector(".navbar-toggler");
  const responsiveNavItems = [].slice.call(
    document.querySelectorAll("#navbarResponsive .nav-link")
  );
  responsiveNavItems.map(function (responsiveNavItem) {
    responsiveNavItem.addEventListener("click", () => {
      if (window.getComputedStyle(navbarToggler).display !== "none") {
        navbarToggler.click();
      }
    });
  });

  // firstname
  const firstNameInput = document.getElementById("firstNameInput");
  const firstNameMessage = document.getElementById("firstNameMessage");

  // Validate
  firstNameInput.addEventListener("input", function (event) {
    const value = event.target.value;
    const validNamePattern = /^[a-zA-Z'-]{2,}$/;

    if (!validNamePattern.test(value)) {
      firstNameMessage.textContent =
        "Invalid input. Only alphabet characters, hyphens, and apostrophes are allowed, and the minimum length is 2 characters.";
      firstNameInput.style.borderColor = "red";
      firstNameMessage.className = "message-error"; // Set the class
    } else {
      firstNameMessage.textContent = "The input is valid.";
      firstNameInput.style.borderColor = "";
      firstNameMessage.className = "message-success"; // Set the class
    }
  });

  // lastname
  const lastNameInput = document.getElementById("lastNameInput");
  const lastNameMessage = document.getElementById("lastNameMessage");

  // Validate
  lastNameInput.addEventListener("input", function (event) {
    const value = event.target.value;
    const validNamePattern = /^[a-zA-Z'-]{2,}$/;

    if (!validNamePattern.test(value)) {
      lastNameMessage.textContent =
        "Invalid input. Only alphabet characters, hyphens, and apostrophes are allowed, and the minimum length is 2 characters.";
      lastNameInput.style.borderColor = "red";
      lastNameMessage.className = "message-error"; // Set the class
    } else {
      lastNameMessage.textContent = "The input is valid.";
      lastNameInput.style.borderColor = "";
      lastNameMessage.className = "message-success"; // Set the class
    }
  });

  // Email
  const emailInput = document.getElementById("emailInput");
  const emailMessage = document.getElementById("emailMessage");

  // Validate
  emailInput.addEventListener("input", function (event) {
    const value = event.target.value;
    // Common regex pattern for email validation
    const validEmailPattern =
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!validEmailPattern.test(value)) {
      emailMessage.textContent =
        "Invalid input. Please enter a valid email address.";
      emailInput.style.borderColor = "red";
      emailMessage.className = "message-error"; // Set the class
    } else {
      emailMessage.textContent = "The input is valid.";
      emailInput.style.borderColor = "";
      emailMessage.className = "message-success"; // Set the class
    }
  });

  // Phone number
  const phoneInput = document.getElementById("phoneInput");
  const phoneMessage = document.getElementById("phoneMessage");

  // Validate
  phoneInput.addEventListener("input", function (event) {
    const value = event.target.value;
    // Regex pattern for validating a 10-digit phone number
    const validPhonePattern = /^\d{10}$/;

    if (!validPhonePattern.test(value)) {
      phoneMessage.textContent =
        "Invalid input. Please enter a 10-digit phone number.";
      phoneInput.style.borderColor = "red";
      phoneMessage.className = "message-error"; // Set the class
    } else {
      phoneMessage.textContent = "The input is valid.";
      phoneInput.style.borderColor = "";
      phoneMessage.className = "message-success"; // Set the class
    }
  });

  // Username
  const usernameInput = document.getElementById("usernameInput");
  const usernameMessage = document.getElementById("usernameMessage");

  // Validate
  usernameInput.addEventListener("input", function (event) {
    const value = event.target.value;
    // Regex pattern for validating a username
    const validUsernamePattern = /^[a-zA-Z0-9._]{6,}$/;

    if (!validUsernamePattern.test(value)) {
      usernameMessage.textContent =
        "Invalid input. Username must be at least 6 characters minimum";
      usernameInput.style.borderColor = "red";
      usernameMessage.className = "message-error"; // Set the class
    } else {
      usernameMessage.textContent = "The input is valid.";
      usernameInput.style.borderColor = "";
      usernameMessage.className = "message-success"; // Set the class
    }
  });

  // Password
  const passwordInput = document.getElementById("passwordInput");
  const passwordMessage = document.getElementById("passwordMessage");

  // Validate
  passwordInput.addEventListener("input", function (event) {
    const value = event.target.value;
    // Regex pattern for a strong password
    const validPasswordPattern = /^[a-zA-Z0-9._]{6,}$/;

    if (!validPasswordPattern.test(value)) {
      passwordMessage.textContent =
        "Invalid input. Password must be at least 6 characters long";
      passwordInput.style.borderColor = "red";
      passwordMessage.className = "message-error"; // Set the class
    } else {
      passwordMessage.textContent = "The input is valid.";
      passwordInput.style.borderColor = "";
      passwordMessage.className = "message-success"; // Set the class
    }
  });

  // Password
  const commentInput = document.getElementById("commentInput");
  const commentMessage = document.getElementById("commentMessage");

  // Validate
  commentInput.addEventListener("input", function (event) {
    const value = event.target.value;
    // Regex pattern for a strong comment
    const validCommentPattern = /.{1,}$/;

    if (!validCommentPattern.test(value)) {
      commentMessage.textContent = "Comment cannot be NULL";
      commentInput.style.borderColor = "red";
      commentMessage.className = "message-error"; // Set the class
    } else {
      commentMessage.textContent = "The input is valid.";
      commentInput.style.borderColor = "";
      commentMessage.className = "message-success"; // Set the class
    }
  });

  // POST SUBMIT BUTTON

  // Initialize an array to collect messages
  let validationMessages = [];

  // Email validation regex
  const validRegex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  // Helper function for name validation
  function validateName(inputElement, nameType) {
    const value = inputElement.value;
    const validNamePattern = /^[a-zA-Z'-]{2,}$/;

    if (!validNamePattern.test(value)) {
      validationMessages.push(
        `Invalid ${nameType}: Only alphabet characters, hyphens, and apostrophes are allowed, and the minimum length is 2 characters.`
      );
    }
  }

  // Helper function for username and password validation
  function validateUserPass(inputElement, fieldType) {
    const value = inputElement.value;
    if (value.length < 6) {
      validationMessages.push(
        `Invalid ${fieldType}: Must be at least 6 characters long.`
      );
    }
  }

  // Helper function for phone number validation
  function validatePhone(inputElement) {
    const value = inputElement.value;
    const validPhonePattern = /^\d{10}$/;

    if (!validPhonePattern.test(value)) {
      validationMessages.push(
        "Invalid phone number: Please enter a 10-digit phone number."
      );
    }
  }

  // Helper function for comments validation
  function validateComments(inputElement) {
    if (!inputElement.value || inputElement.value === "") {
      validationMessages.push("Comments cannot be empty.");
    }
  }

  document
    .getElementById("submitButton")
    .addEventListener("click", function (event) {
      event.preventDefault();
      validationMessages = []; // Clear previous messages

      // Validate all fields
      validateName(document.getElementById("firstNameInput"), "First Name");
      validateName(document.getElementById("lastNameInput"), "Last Name");

      const emailInput = document.getElementById("emailInput");
      if (!validRegex.test(emailInput.value)) {
        validationMessages.push("Invalid email format.");
      }

      validatePhone(document.getElementById("phoneInput"));
      validateUserPass(document.getElementById("usernameInput"), "username");
      validateUserPass(document.getElementById("passwordInput"), "password");
      validateComments(document.getElementById("commentInput"));

      // Display success
      const messageDisplay = document.getElementById("messageDisplay");

      if (validationMessages.length == 0) {
        messageDisplay.innerHTML = "Successfully submitted!!!!!";
        messageDisplay.className = "message-success"; // Set the class to display block
      } else {
        // Display all validation messages
        messageDisplay.innerHTML = validationMessages
          .map((x) => `<p>${x}</p>`)
          .join("");
        messageDisplay.className = "message-error"; // Set the class to display block
      }
    });
});
