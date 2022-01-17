// button variable
var generateBtn = document.querySelector("#generate");
// defining function that generates password and displays on screen
function writePassword() {
  var password = generatePassword();
  console.log('password', password)

  var passwordText = document.querySelector("#password");

  passwordText.value = password;

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
  let password = ''

  // password character type parameters
  if (isPassUpperCase == "yes" && isPassLowerCase == "yes" && isPassSpecialCase == "yes" && isPassNumericCase == "yes") {
    console.log ("uppercase yes")
    
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*(<)';

    for (var i = 0; i < characters.length; i++) {
      password += characters.charAt(Math.floor(Math.random() * characters.length))

      if (i == passLength) {
        break
      }
    }

    return password
  }
  if (isPassUpperCase == "yes" && isPassLowerCase == "yes" && isPassSpecialCase == "no" && isPassNumericCase == "no") {
    console.log ("uppercase yes")
    
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

    for (var i = 0; i < characters.length; i++) {
      password += characters.charAt(Math.floor(Math.random() * characters.length))

      if (i == passLength) {
        break
      }
    }

    return password
  }
  if (isPassUpperCase == "yes" && isPassLowerCase == "no" && isPassSpecialCase == "no" && isPassNumericCase == "no") {
    console.log ("uppercase yes")
    
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    for (var i = 0; i < characters.length; i++) {
      password += characters.charAt(Math.floor(Math.random() * characters.length))

      if (i == passLength) {
        break
      }
    }

    return password
  }
  if (isPassUpperCase == "yes" && isPassLowerCase == "no" && isPassSpecialCase == "yes" && isPassNumericCase == "no") {
    console.log ("uppercase yes")
    
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*(<)';

    for (var i = 0; i < characters.length; i++) {
      password += characters.charAt(Math.floor(Math.random() * characters.length))

      if (i == passLength) {
        break
      }
    }

    return password
  }
  if (isPassUpperCase == "yes" && isPassLowerCase == "no" && isPassSpecialCase == "no" && isPassNumericCase == "yes") {
    console.log ("uppercase yes")
    
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890';

    for (var i = 0; i < characters.length; i++) {
      password += characters.charAt(Math.floor(Math.random() * characters.length))

      if (i == passLength) {
        break
      }
    }

    return password
  }
  if (isPassUpperCase == "no" && isPassLowerCase == "yes" && isPassSpecialCase == "yes" && isPassNumericCase == "no") {
    console.log ("uppercase yes")
    
    var characters = 'abcdefghijklmnopqrstuvwxyz!@#$%^&*(<)';

    for (var i = 0; i < characters.length; i++) {
      password += characters.charAt(Math.floor(Math.random() * characters.length))

      if (i == passLength) {
        break
      }
    }

    return password
  }
  if (isPassUpperCase == "no" && isPassLowerCase == "yes" && isPassSpecialCase == "no" && isPassNumericCase == "yes") {
    console.log ("uppercase yes")
    
    var characters = 'abcdefghijklmnopqrstuvwxyz1234567890s';

    for (var i = 0; i < characters.length; i++) {
      password += characters.charAt(Math.floor(Math.random() * characters.length))

      if (i == passLength) {
        break
      }
    }

    return password
  }
  if (isPassUpperCase == "no" && isPassLowerCase == "no" && isPassSpecialCase == "yes" && isPassNumericCase == "yes") {
    console.log ("uppercase yes")
    
    var characters = '!@#$%^&*()1234567890s';

    for (var i = 0; i < characters.length; i++) {
      password += characters.charAt(Math.floor(Math.random() * characters.length))

      if (i == passLength) {
        break
      }
    }

    return password
  }
  if (isPassUpperCase == "no" && isPassLowerCase == "yes" && isPassSpecialCase == "no" && isPassNumericCase == "yes") {
    console.log ("uppercase yes")
    
    var characters = 'abcdefghijklmnopqrstuvwxyz1234567890s';

    for (var i = 0; i < characters.length; i++) {
      password += characters.charAt(Math.floor(Math.random() * characters.length))

      if (i == passLength) {
        break
      }
    }

    return password
  }
  if (isPassUpperCase == "no" && isPassLowerCase == "no" && isPassSpecialCase == "yes" && isPassNumericCase == "yes") {
    console.log ("uppercase yes")
    
    var characters = '!@#$%^&*()1234567890s';

    for (var i = 0; i < characters.length; i++) {
      password += characters.charAt(Math.floor(Math.random() * characters.length))

      if (i == passLength) {
        break
      }
    }

    return password
  }
  if (isPassUpperCase == "no" && isPassLowerCase == "yes" && isPassSpecialCase == "yes" && isPassNumericCase == "no") {
    console.log ("uppercase yes")
    
    var characters = 'abcdefghijklmnopqrstuvwxyz!@#$%^&*()';

    for (var i = 0; i < characters.length; i++) {
      password += characters.charAt(Math.floor(Math.random() * characters.length))

      if (i == passLength) {
        break
      }
    }

    return password
  }
  if (isPassUpperCase == "no" && isPassLowerCase == "no" && isPassSpecialCase == "no" && isPassNumericCase == "yes") {
    console.log ("uppercase yes")
    
    var characters = '1234567890';

    for (var i = 0; i < characters.length; i++) {
      password += characters.charAt(Math.floor(Math.random() * characters.length))

      if (i == passLength) {
        break
      }
    }

    return password
  }
  if (isPassUpperCase == "yes" && isPassLowerCase == "yes" && isPassSpecialCase == "yes" && isPassNumericCase == "no") {
    console.log ("uppercase yes")
    
    var characters = 'abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    for (var i = 0; i < characters.length; i++) {
      password += characters.charAt(Math.floor(Math.random() * characters.length))

      if (i == passLength) {
        break
      }
    }

    return password
  }
  if (isPassUpperCase == "yes" && isPassLowerCase == "yes" && isPassSpecialCase == "no" && isPassNumericCase == "yes") {
    console.log ("uppercase yes")
    
    var characters = 'abcdefghijklmnopqrstuvwxyz1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    for (var i = 0; i < characters.length; i++) {
      password += characters.charAt(Math.floor(Math.random() * characters.length))

      if (i == passLength) {
        break
      }
    }

    return password
  }
  if (isPassUpperCase == "yes" && isPassLowerCase == "no" && isPassSpecialCase == "yes" && isPassNumericCase == "yes") {
    console.log ("uppercase yes")
    
    var characters = '1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()';

    for (var i = 0; i < characters.length; i++) {
      password += characters.charAt(Math.floor(Math.random() * characters.length))

      if (i == passLength) {
        break
      }
    }

    return password
  }
  if (isPassUpperCase == "no" && isPassLowerCase == "no" && isPassSpecialCase == "yes" && isPassNumericCase == "no") {
    console.log ("uppercase yes")
    
    var characters = '!@#$%^&*()';

    for (var i = 0; i < characters.length; i++) {
      password += characters.charAt(Math.floor(Math.random() * characters.length))

      if (i == passLength) {
        break
      }
    }

    return password
  }
}
// Add event listener to generate button that calls writePassword function when clicked
generateBtn.addEventListener("click", writePassword);
