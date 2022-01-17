// button variable
var generateBtn = document.querySelector("#generate");
// defining function that generates password and displays on screen
function writePassword() {
  var password = generatePassword();
  console.log(password)
  console.log('password', password)

  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// helper function to verify password conditions.
function setupPasswordForGen(isPassUpperCase, isPassLowerCase, isPassNumericCase, isPassSpecialCase){
  let password = ""
  if(isPassUpperCase === 'yes'){
    password = password + 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' 
  }
  if(isPassLowerCase === 'yes'){
    password = password + 'abcdefghijklmnopqrstuvwxyz'
  }
  if(isPassNumericCase === 'yes'){
    password = password + '1234567890' 
  }
  if(isPassSpecialCase === 'yes'){
    password = password + '!@#$%^&*()'
  }
  console.log(password)
  return password
}

// function that generates password based on  user passed in prompt
function generatePassword() {
  var passLength = prompt ("How many characters would you like your password to be?") 

  // getting password length from user inside while loop
  while (passLength > 128 || passLength < 8) {
    alert("Try Again")
    passLength = prompt ("How many characters would you like your password to be?") 
  }

  console.log (passLength)

  var isPassUpperCase = prompt ("Would you like any uppercase characters?")
  var isPassLowerCase = prompt ("Would you like any lowercase characters?")
  var isPassNumericCase = prompt ("Would you like any numeric characters?")
  var isPassSpecialCase = prompt ("Would you like any special characters?")

  console.log("things", isPassUpperCase, isPassLowerCase, isPassNumericCase, isPassSpecialCase)

  // while loop that redirects if user doesn't choose a character type
  while (isPassUpperCase == "no" && isPassLowerCase && "no" && isPassSpecialCase == "no" && isPassNumericCase == "no" ) {
    alert("Try Again")
    isPassUpperCase = prompt ("Would you like any uppercase characters?")
    isPassLowerCase = prompt ("Would you like any lowercase characters?")
    isPassNumericCase = prompt ("Would you like any numeric characters?")
    isPassSpecialCase = prompt ("Would you like any special characters?")

    console.log("things 2", isPassUpperCase, isPassLowerCase, isPassNumericCase, isPassSpecialCase)
  }

  // declaring password variable for use later
  const passwordConstraints = setupPasswordForGen(isPassUpperCase, isPassLowerCase, isPassNumericCase, isPassSpecialCase)
  let finalPassword = "";
  for (var i = 0; i < passLength; i++) {
    finalPassword = finalPassword +  passwordConstraints.charAt(Math.floor(Math.random() * passwordConstraints.length))
  }
  return finalPassword
}
// Add event listener to generate button that calls writePassword function when clicked
generateBtn.addEventListener("click", writePassword);
