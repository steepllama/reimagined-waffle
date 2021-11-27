// Assignment code here

var number = "123456789";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var special = "!@#$%^&*_-+=()?<>";
var passwordCollect = "";
var passwordChar = "";

function generatePassword() {

  var passwordLength = window.prompt(" Pick a number between 8 and 128!");

  if (passwordLength >= 8 && passwordLength <= 128) {

    var promptNumber = confirm(" Would you like to have Numbers? ");
    if (promptNumber) {
      passwordChar += number;
    }
    // console.log(promptNumber)

    var promptUpperCase = confirm(" Would you like to have Uppercase letters? ");
    if (promptUpperCase) {
      passwordChar += upperCase;
    }
    // console.log(promptUpperCase)

    var promptLowerCase = confirm(" Would you like to have Lowercase letters? ");
    if (promptLowerCase) {
      passwordChar += lowerCase;
    }
    // console.log(promptLowerCase)

    var promptSpecial = confirm(" Would you like to have Special characters? ");
    if (promptSpecial) {
      passwordChar += special;
      // console.log(promptSpecial)
    }
    else if (
      promptUpperCase === false &&
      promptLowerCase === false &&
      promptNumber === false &&
      promptSpecial === false
    ) {
      alert (" Must select 1 option! ");
      return generatePassword();
    }
    for (var i=0; i < passwordLength; i++) {
      var value =Math.floor(Math.random() * passwordChar.length);
      passwordCollect += passwordChar[value];
    }
    // console.log(passwordCollect);
    return passwordCollect;
  } else {
    alert (" Please select a number between 8 and 128!");
    return generatePassword();
  }
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
