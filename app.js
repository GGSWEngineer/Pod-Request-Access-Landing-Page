function updateImageSource() {
  const heroImg = document.querySelector(".image-host");

  if (window.innerWidth > 992) {
    heroImg.src = "assets/desktop/image-host.jpg";
  } else if (window.innerWidth > 768) {
    heroImg.src = "assets/tablet/image-host.jpg";
  } else {
    heroImg.src = "assets/mobile/image-host.jpg";
  }
}

// Initial update on page load
updateImageSource();

// Update on window resize
window.addEventListener("resize", updateImageSource);



function checkInputHasEmail() {
  const emailInput = document.querySelector("#emailInput");
  const errorMessage = document.querySelector(".error-message");
  if (emailInput.value.trim() !== "") {
    errorMessage.style.display = "none";
    emailInput.classList.remove("error");
  }
}

emailInput.addEventListener("input", checkInputHasEmail);



function validateForm(event) {
    event.preventDefault();
  
    const emailInput = document.querySelector("#emailInput");
    const errorMessage = document.querySelector(".error-message");
    const successMessage = document.querySelector(".success-message");
  
    // Email validation
    if (emailInput.checkValidity()) {
      successMessage.style.display = "block";
    } else {
      errorMessage.style.display = "block";
      successMessage.style.display = "none";
      return; // Prevent further execution if email validation fails
    }
  
    // Your additional form validation logic here
  
    // If all validation passes, you can submit the form programmatically
    document.querySelector("#myForm").submit();
  }
  
  document.querySelector("#myForm").addEventListener("submit", validateForm);













  // Validate form

// function validateForm(event) {
//   event.preventDefault();
//   const emailInput = document.querySelector("#emailInput");
//   // Your custom validation logic
//   if (!emailInput.checkValidity()) {
//     return; // Prevent form submission
//   }
//   // Additional validation logic if needed

//   // If all validation passes, you can submit the form programmatically
//   document.querySelector("#myForm").submit();
// }

// document.querySelector("#myForm").addEventListener("submit", validateForm);


// Validate email

// function validateEmail() {
//   const emailInput = document.querySelector("#emailInput");
//   const errorMessage = document.querySelector(".error-message");
//   const successMessage = document.querySelector(".success-message");

//   if (emailInput.checkValidity()) {
//     successMessage.style.display = "block";
//   } else {
//     errorMessage.style.display = "block";
//     successMessage.style.display = "none";
//   }
// }

// document.querySelector(".btn").addEventListener("click", validateEmail);