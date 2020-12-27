//Assignment code
var generateBtn = document.querySelector("#generate");

var randomChar = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","r","x","w","z",
                  "A", "B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
                  "!","#","$","%","&","*","+","-","/",":",";","<","=",">","?","@","[","]","^","_","{","}","|","~",
                  1,2,3,4,5,6,7,8,9,];
              
var tempPass = [];

    


    function generatePassword () {
        tempPass.length = 0;

        var passLength = parseInt (prompt ("Please select the length of Password would you like?" + "\n(8 characters to 128 characters)"));

        if(passLength >= 8 && passLength <= 128) {
        promptSpecialChar ();
        } else {
        alert("Password requires a minimum of 8 characters and a maximum of 128 characters");
        generatePassword();
        }
    
    
    function promptSpecialChar () {
        var specialChar = prompt("Please select special Characters for your password" + "\n(Example: &,#,@,!,^");   
        tempPass.push(specialChar);
        if(specialChar === null) {
            alert("Please enter a valid input ");
            promptSpecialChar();
            } else {
                promptLowerChar();
            }
        }
    
    function promptLowerChar () {
        var lowerChar = prompt("Please select a lower case character for your password" + "\n(Example: a,b,c,d");
        var allLowerChar = lowerChar.toLowerCase();
        tempPass.push(allLowerChar);

        if(lowerChar === null) {
            alert("Please enter a valid input");
            promptLowerChar();
        } else {
            promptUpperChar();
        }
    }

    function promptUpperChar () {
        var upperChar = prompt("Please select a upper case character for your password" + "\n(Example: A,B,C,D)");
        var allUpperChar = upperChar.toUpperCase();
        tempPass.push(allUpperChar);

        if(upperChar === null) {
            alert("Please enter a valid input");
        } else {
            promptNumber();
        }
    }

    function promptNumber () {
        var numberChar = prompt("Please select a number for your password" + "\n(Example: 1,2,3,4)");
        tempPass.push(numberChar);

        if(numberChar === null) {
            alert("Please enter a valid input");
        } else {
            buildPassword();
        }
    }

    function buildPassword () {
        
        var tempTotal = tempPass.length
    
        for(var i=0; i < passLength - tempTotal; i++) {
            var buildPass =
            randomChar[Math.ceil(Math.random() * randomChar.length)];
            tempPass.push(buildPass);   
            }
            console.log(tempPass);
            joinPassword();
        }
    function joinPassword () { 
        var password = tempPass.join('');
        var passwordText= document.querySelector('#password');
        passwordText.value = password;  
           
        }
    }
            
      

    


generateBtn.addEventListener('click', generatePassword);








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