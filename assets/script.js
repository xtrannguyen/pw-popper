// all pw possibilities
var lower = "abcdefghijklmnopqrstuvwxyz";
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var number = "1234567890";
var special = "~!@#$%^&*()_+=-`{}|[]:;'<>?,./";
var pw = ""; 
var lengthPrompt;

// work on for loop and randomness
var generatePassword = function() {
  for ( var i = 0, n = lower.length; i < lengthPrompt; i++ ){
    pw += lower.charAt(Math.floor(Math.random() * n));
  }
  return pw;
}

// prompts
var initial = function() {
  lengthPrompt = window.prompt("How long would you like your password to be?");
    // pw has to be between 8-128
    if (lengthPrompt > 128 || lengthPrompt < 8){
      window.alert("Uh-oh! The password has to be between 8 - 128! Try again :)");
      initial();
    }

  var upperPrompt = window.confirm("Would you like to include uppercase letters?");
    if (upperPrompt){
      lower += upper;
    }

  var numberPrompt = window.confirm("Would you like to include numbers?");
    if (numberPrompt){
      lower += number;
    }

  var specialPrompt = window.confirm("Would you like to include special characters?");
    if (specialPrompt){
      lower += special;
    }
  
  // call pw generator function
  generatePassword();
}


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

// call function
initial();
