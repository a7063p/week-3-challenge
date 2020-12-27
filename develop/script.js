//Assignment code
var generateBtn = document.querySelector("#generate");

var lowerCaseCharacters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","w","z"];
var upperCaseCharacters = ["A", "B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var specialCharacters = ["!","#","$","%","&","*","+","-","/",":",";","<","=",">","?","@","[","]","^","_","{","}","|","~"];
var numericCharacters = [1,2,3,4,5,6,7,8,9];

            
var passArray = [];
var passwordArray = [];    




    //Generate Password//

    function generatePassword () {
    
        //RESET PassArray(s) index
        passArray.length = 0;
        passwordArray.length = 0;
        ///----------------------///

        //Length Requirement ---> Special Character Function Call//
        var passLength = parseInt (prompt ("Please select the length of Password would you like?" + "\n(8 characters to 128 characters)"));

        if(passLength >= 8 && passLength <= 128) {        
        promptSpecialChar ();

        } else {
            alert("Password requires a minimum of 8 characters and a maximum of 128 characters");
            generatePassword();
        };      
        ///------------------------------------------------------///


        //special character request ----> Uppercase Function Call//    
    
        function promptSpecialChar () {
        var specialChar = prompt("Would you like a special character in your password?" + "\nInput 'YES' or 'NO'");
        var lowerSpecialChar = specialChar.toLowerCase();

            if(lowerSpecialChar === "yes" || lowerSpecialChar === "y") {
                for(var i = 0; i < passLength; i++) {
                    var selectSpecialChar =
                    specialCharacters[Math.floor(Math.random() * specialCharacters.length)];
                    passArray.push(selectSpecialChar);
                    }
                    promptUpperChar();    
            } else {
                promptUpperChar ();
            }
        };
        ///------------------------------------------------------///

        //Uppercase character request ----> Lowercase function call//

        function promptUpperChar () {
        var upperChar = prompt("Would you like a upper case character in your password?" + "\nInput 'YES' or 'NO'");
        var lowerUpperChar = upperChar.toLowerCase();

            if(lowerUpperChar === "yes" || lowerUpperChar === "y") {
                for(var i = 0; i < passLength; i++) {
                    var selectUpperChar =
                    upperCaseCharacters[Math.floor(Math.random() * upperCaseCharacters.length)];
                    passArray.push(selectUpperChar);
                    } 
                    promptLowerChar();   
            } else {
                promptLowerChar ();
            }
        }
        ///------------------------------------------------------///

        //Lowercase character request ----> Numeric function call//

        function promptLowerChar () {
        var lowerChar = prompt("Would you like a lower case character in your password?" + "\nInput 'YES' or 'NO'");
        var lowerLowerChar = lowerChar.toLowerCase();

            if(lowerLowerChar === "yes" || lowerLowerChar === "y") {
                for(var i = 0; i < passLength; i++) {
                    var selectLowerChar =
                    lowerCaseCharacters[Math.floor(Math.random() * lowerCaseCharacters.length)];
                    passArray.push(selectLowerChar);
                    } 
                    promptNumericChar();   
            } else {
                promptNumericChar ();
            }
        }
        ///------------------------------------------------------///

        // Numeric character request ----> Build password call//

        function promptNumericChar () {            
        var numericChar = prompt("Would you like a numeric character in your password?" + "\nInput 'YES' or 'NO'");        
        var lowerNumericChar = numericChar.toLowerCase();
            if(lowerNumericChar === "yes" || lowerNumericChar === "y") {
                for(var i = 0; i < passLength; i++) {
                    var selectNumericChar =
                    numericCharacters[Math.floor(Math.random() * numericCharacters.length)];
                    passArray.push(selectNumericChar);
                    } 
                    buildPassword();
                       
            } else {
                buildPassword();
            }
        }
        ///------------------------------------------------------///

        //Build Password ---> Join Password call//

        function buildPassword () {
            //No user input validation alert//
            if(passArray.length == 0) {
                alert("You did not enter Any input(s) for your password. Please Enter an input.");
                ///------------------------------------------------------///
            
            //Randomly select password characters from user(s) input//
            } else {
            for(var i = 0; i < passLength; i++) {
                var selectPassArray =
                passArray[Math.floor(Math.random() * passArray.length)];
                passwordArray.push(selectPassArray);
                } 
            joinPassword ();                       
            }
        }                
        ///------------------------------------------------------///

        //Join password and display to user//
        function joinPassword() {
            var password = passwordArray.join("");
            var passwordText = document.querySelector('#password');
            passwordText.value = password
        }
        ///------------------------------------------------------///    
    };
    
    generateBtn.addEventListener('click', generatePassword);
