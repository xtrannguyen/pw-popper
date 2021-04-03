// all pw possibilities
var lower = "abcdefghijklmnopqrstuvwxyz";
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var number = "1234567890";
var special = "~!@#$%^&*()_+=-`{}|[]:;'<>?,./";
var pw = ""; 

// prompts
var lengthPrompt = window.alert("How long would you like your password to be?");
// pw has to be between 8-128
// continue onto next prompt if within limit
// if not return a msg and return to initial prompt

var upperPrompt = window.alert("Would you like to include uppercase letters?");
// if yes, add upper to lower, continue to next prompt
// if no, don't add and continue to next prompt

var numberPrompt = window.alert("Would you like to include numbers?");

var specialPrompt = window.alert("Would you like to include special characters?");

// work on for loop and randomness


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
