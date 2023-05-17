// Use the document object to access the HTML elements on the page
var myDocument = document;
var myHeading = myDocument.querySelector('h1');
var myButton = myDocument.querySelector('button');
var submitBtn = myDocument.querySelector("#submit");
var generateBtn = myDocument.querySelector("#generate");
var resetBtn = myDocument.querySelector("#reset");


// Generate Password
function generatePassword() {
  var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numberChars = "0123456789";
  var symbolChars = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

  // Prompt the user for lowercase letter selection
  var includeLowercase = confirm("Do you want to include lowercase letters in your password?");

  // Prompt the user for uppercase letter selection
  var includeUppercase = confirm("Do you want to include uppercase letters in your password?");

  // Prompt the user for number selection
  var includeNumbers = confirm("Do you want to include numbers in your password?");

  // Prompt the user for password length
  var passwordLength = parseInt(prompt("Enter the desired length of your password (between 8 and 128 characters):"));

  // Validate the user input for password length
  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    alert("Invalid password length. Please enter a number between 8 and 128.");
    return "";
  }

  // Prompt the user for symbol selection
  var includeSymbols = confirm("Do you want to include symbols in your password?");

  // Build the character set based on user preferences
  var charset = "";
  if (includeLowercase) {
    charset += lowercaseChars;
  }
  if (includeUppercase) {
    charset += uppercaseChars;
  }
  if (includeNumbers) {
    charset += numberChars;
  }
  if (includeSymbols) {
    charset += symbolChars;
  }

  // Check if no character types were selected
  if (charset === "") {
    alert("You must select at least one character type for the password.");
    return "";
  }

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


generateBtn.addEventListener("click", writePassword);