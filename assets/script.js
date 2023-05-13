// Use the document object to access the HTML elements on the page
var myDocument = document;
var myHeading = myDocument.querySelector('h1');
var myButton = myDocument.querySelector('button');
var submitBtn = myDocument.querySelector("#submit");
var generateBtn = myDocument.querySelector("#generate");
var resetBtn = myDocument.querySelector("#reset");

// Generate Password
function generatePassword() {
  var charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=";
  
  // Define the minimum and maximum length of the password
  var minLength = 8;
  var maxLength = 128;

  // Generate a random password length between minLength and maxLength
  var passwordLength = Math.floor(Math.random() * (maxLength - minLength + 1) + minLength);

  // Initialize an empty string to store the generated password
  var password = "";

  // Loop through the password length and randomly select characters from the charset
  for (var i = 0; i < passwordLength; i++) {
    var randomIndex = Math.floor(Math.random() * charset.length);
    password += charset[randomIndex];
  }

  // Return the generated password
  return password;
}


// Write Password
function writePassword() {
    var password = generatePassword();
    var passwordText = myDocument.querySelector("#password");

    passwordText.value = password;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Define the submit event handler function
function handleSubmit(event) {
  
  // Prevent the default form submission behavior
  event.preventDefault();


  var passwordInput = myDocument.querySelector("#password");
  var password = passwordInput.value;

 
  if (password.length < 8 || password.length > 128) {
    alert("Password must be between 8 and 128 characters long.");
    return;
  }

 
  var passwordText = myDocument.querySelector("#password");
  passwordText.value = password;
}


submitBtn.addEventListener("click", handleSubmit);