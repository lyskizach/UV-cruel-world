var numbers = ['0','1','2','3','4','5','6','7','8','9'];
var specialChar = ['!','@','#','$','%','^','&','*','(',')','+','-','.','~','|','<','>','=','-','_','/',':',';','?','[',']','{','}','~'];
var lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

function generatePassword() {

  var possiblePassword = [];
  var finalPassword = [];

  var length;
  while (true) {
    length = prompt("How many characters do you want in your password?");
    console.log(length);
    if (length >= 8 && length <= 128) {
      break;
    }
    alert("Please choose an amount between 8 and 128");
  }

  while (true) {
    if (confirm("Do you want to include lowercase letters?")) {
      possiblePassword = possiblePassword.concat(lowerCase);
    }

    if (confirm("Do you want to include UPPERCASE letters?")) {
      possiblePassword = possiblePassword.concat(upperCase);
    }

    if (confirm("Do you want to include numbers?")) {
      possiblePassword = possiblePassword.concat(numbers);
    }

    if (confirm("Do you want to include special characters?")) {
      possiblePassword = possiblePassword.concat(specialChar);
    }

    if (possiblePassword.length >= 1) {
      break;
    }
    alert("You must choose at least one type of character");
  }

  console.log(possiblePassword);
  for (let index = 0; index < length; index++) {
    finalPassword.push(possiblePassword[Math.floor(Math.random() * possiblePassword.length)]);
  }

  console.log(finalPassword);
  return finalPassword.join("");
}
var generateBtn = document.querySelector("#generate");

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);