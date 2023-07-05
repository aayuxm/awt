function validateForm() {
    var fullName = document.getElementById('fullName').value;
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;
    var gender = document.querySelector('input[name="gender"]:checked');
    var phone = document.getElementById('phone').value;
    var email = document.getElementById('email').value;
    var state = document.getElementById('state').value;
    var agreement = document.getElementById('agreement').checked;
    
    var errorContainer = document.getElementById('errorContainer');
    errorContainer.innerHTML = ''; // Clear previous error messages
    
    var isValid = true; // Flag to track overall form validity
    
    // Regular expressions for validation
    var passwordRegex = /^(?=.*[a-zA-Z0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,10}$/;
    var phoneRegex = /^[0-9]{10}$/;
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    // Validate Full Name
    if (fullName.trim() === '') {
      isValid = false;
      displayError('fullName', 'Full Name is required.');
    }
    
    // Validate Username
    if (username.trim() === '') {
      isValid = false;
      displayError('username', 'Username is required.');
    } else if (!username.match(/^[a-zA-Z0-9]+$/)) {
      isValid = false;
      displayError('username', 'Username should be alphanumeric.');
    }
    
    // Validate Password
    if (password.trim() === '') {
      isValid = false;
      displayError('password', 'Password is required.');
    } else if (!password.match(passwordRegex)) {
      isValid = false;
      displayError('password', 'Password should be alphanumeric with at least one special symbol (!@#$%^&*) and between 6 to 10 characters in length.');
    }
    
    // Validate Confirm Password
    if (confirmPassword.trim() === '') {
      isValid = false;
      displayError('confirmPassword', 'Confirm Password is required.');
    } else if (confirmPassword !== password) {
      isValid = false;
      displayError('confirmPassword', 'Passwords do not match.');
    }
    
    // Validate Gender
    if (!gender) {
      isValid = false;
      displayError('gender', 'Please select a gender.');
    }
    
    // Validate Phone
    if (phone.trim() === '') {
      isValid = false;
      displayError('phone', 'Phone No is required.');
    } else if (!phone.match(phoneRegex)) {
      isValid = false;
      displayError('phone', 'Phone No should be a 10-digit number.');
    }
    
    // Validate Email
    if (email.trim() === '') {
      isValid = false;
      displayError('email', 'Email is required.');
    } else if (!email.match(emailRegex)) {
      isValid = false;
      displayError('email', 'Invalid email format.');
    }
    
    // Validate State
    if (state === '') {
      isValid = false;
      displayError('state', 'Please select a state.');
    }
    
    // Validate Agreement Checkbox
    if (!agreement) {
      isValid = false;
      displayError('agreement', 'You must agree to the terms and conditions.');
    }
    
    if (isValid) {
      // Form is valid, redirect to login page
      window.location.href = 'login.html';
    }
  
    return false; // Prevent form submission
  }
  
  function displayError(fieldId, message) {
    var field = document.getElementById(fieldId);
    var errorContainer = document.getElementById('errorContainer');
    var errorMessage = document.createElement('p');
    errorMessage.className = 'error';
    errorMessage.textContent = '*' + message;
    errorContainer.appendChild(errorMessage);
  }
  
  