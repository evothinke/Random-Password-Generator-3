// Assignment Code
var generateBtn = document.querySelector("#generate");



const compareRandom = () => Math.random() - 0.5;
//defining a function called compareRandom. It will use a buil-in method called Math.random 
//to generate a random number between 0 an 1 then substracting 0.5 from this random number that giving us a positive or negative number.
//later we can use this to get a random order in an array

//const randomInteger = ( min, max ) => Math.round(min - 0.5 + Math.random() * (max - min + 1));
const randomInteger = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;


let arr = [];
let arr_num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let arr_en = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let arr_EN = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
let arr_symb = ['!', '@', '#', '$', '%', '?', '-', '+', '=', '~'];
// initializing 4 arrays that will contain numbers, lower case, upper case and special characters.


//the function that will generate the password
function generatePassword() {
  console.log("here comes the password");
  

  // 1. asking then validating user inputs (lowecase, uppercase, numbers, special characters)
  // 2. generating the password according to the validated data
  // 3. outputting the generated password throught the html element #password
  
    // ________________________________________________________
    
    
    const numberOfCharacters = prompt("How many chars? ", "");
    const parsedNumberOfCharacters = parseInt(numberOfCharacters);
    
    
    // I decided to validate user's input to make sure only digits are entered by using 'parseInt()'
    if (isNaN(parsedNumberOfCharacters) || parsedNumberOfCharacters < 8 || parsedNumberOfCharacters > 128) {
      alert("I need an integer between 8 and 128.");
      // if the condition is not satisfied, we show the alert message and return an empty string.
      return "";
    } 
    
    
    // if (numberOfCharacters < 8) {
      //   alert("the password must be between 8 and 128");
      //   return "";
      // } else if (numberOfCharacters > 128) {
        //   alert("password must be less than 128");
        //   return "";
        // }
        
        console.log(numberOfCharacters);
        // ________________________________________________________
        
        var characters = '';
        var lowerCase = confirm("Would you like to use any lower case characters? ");
        if (lowerCase == true) {
          characters += arr_en.join('');
          
        }
        // ________________________________________________________
        
        var upperCase = confirm("Would you like to use any uper case characters? ");
        if (upperCase == true) {
          characters += arr_EN.join('');
          
        }
        // ________________________________________________________
        
        var specialCharacters = confirm("Would you like to use any special case characters? ");
        if (specialCharacters == true) {
          characters += arr_symb.join('');
         
        }
        // ________________________________________________________
        var numbersCharacters = confirm("Would you like to use any numbers? ");
        if (numbersCharacters == true) {
          characters += arr_num.join('');
         
        }
        
        if (characters === '') {
          alert("Please select at least one character type. ")
          return "";
        }


        arr = characters.split(''); //separating the characters 
        arr.sort(compareRandom);
        
        let password = '';
        
        if (arr.length == 0 || parsedNumberOfCharacters == 0) {
          return ""; // added this line to return an empty string if no character type or length is selected
        }
        
        for (let i = 0; i < numberOfCharacters; i++) {
          password += arr[randomInteger(0, arr.length - 1)];
        }
        return password;
      }
      
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = "Your generated password is: " + password  ;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
