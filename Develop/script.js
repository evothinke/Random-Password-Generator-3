// Assignment Code
var generateBtn = document.querySelector("#generate");

const compareRandom = () => Math.random() - 0.5;

//const randomInteger = ( min, max ) => Math.round(min - 0.5 + Math.random() * (max - min + 1));

const randomInteger = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

let arr = [];
let arr_num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let arr_en = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let arr_EN = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
let arr_symb = ['!', '@', '#', '$', '%', '?', '-', '+', '=', '~'];

function generatePassword() {
  console.log("here comes the password");

// pseudo code
// 1. prompt the user to enter password criteria
//    Password length must be between 8 -128
//    lowercase, uppercase, numbers, special characters

// 2. validate the input
// 3. generate password based on criteria
// 4. display password to the page
// function numberOfCharacters() {
  // ________________________________________________________


  const numberOfCharacters = prompt("How many chars? ", "");
  if (numberOfCharacters < 8) {
    alert("the password must be between 8 and 128");
    return "";
  } else if (numberOfCharacters > 128) {
    alert("password must be less than 128");
    return "";
  }
  console.log(numberOfCharacters);
    // ________________________________________________________

  var characters = '';
  var lowerCase = confirm("Would you like to use any lower case characters? ");
  if (lowerCase == true) {
    characters += arr_en.join('');
    console.log(characters, lowerCase);
  }
    // ________________________________________________________

  var upperCase = confirm("Would you like to use any uper case characters? ");
  if (upperCase == true) {
    characters += arr_EN.join('');
    console.log(characters, upperCase);
  }
    // ________________________________________________________

  var specialCharacters = confirm("Would you like to use any special case characters? ");
  if (specialCharacters == true) {
    characters += arr_symb.join('');
    console.log(characters, specialCharacters);
  }
    // ________________________________________________________
  var numbersCharacters = confirm("Would you like to use any numbers? ");
  if (numbersCharacters == true) {
    characters += arr_num.join('');
    console.log(characters, numbersCharacters);
  }

  arr = characters.split('');
  arr.sort(compareRandom);

  let password = '';

  for (let i = 0; i < numberOfCharacters; i++) {
    password += arr[randomInteger(0, arr.length - 1)];
  }

  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
