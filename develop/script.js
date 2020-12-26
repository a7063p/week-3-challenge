//Assignment code
var generateBtn = document.querySelector("#generate");

var randomChar = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","r","x","w","z",
                  "A", "B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
                  "!","#","$","%","&","*","+","-","/",":",";","<","=",">","?","@","[","]","^","_","{","}","|","~",
                  1,2,3,4,5,6,7,8,9,0];
              
var tempPass = [];
var password= [];


    function generatePassword () {
        var passLength = parseInt (prompt ("Please select the length of Password would you like?" + "\n(8 characters to 128 characters)"));
        lengthFunc();


    function lengthFunc () {
        if(passLength >= 8 && passLength <= 128) {
        promptSpecialChar ();
        } else {
        alert("Password requires a minimum of 8 characters and a maximum of 128 characters");
        generatePassword();
        }
    }

};

generatePassword();







// var specialChar = ["#", "%", "(", ",", "&"]




//if(passLength > 8 || passLength < 128 ) {
  //  
 //  }


//Write Password to the #password input

// for (i=0; i < passLength -3 ; i++) {
//     var password = 
//     randomChar[Math.floor(Math.random() * randomChar.length) ];
    
//     console.log(password);

//function writePassword() {

    
    //var password = generatePassword();    

    //var passwordText = document.querySelector("#password");

    //passwordText.value = password;
    
//}


//Add Event listener to generate button

//generateBtn.addEventListener("click", writePassword);












/*////////////////////////////////////////////////////////////////
// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//////////////////////////////////////////////////////////////////*/