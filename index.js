function validatePassword(input, password) {
    let flag = false;
    let length = input.length;

    if (input === password) {
        if (input.length >= 8) { // checks if input is at least 8 characters
            for (let i = 0; i != length; i++) {
                if (input[i] >= "A" && input[i] <= "Z") { //checks for one upper case letter by comparing using ascii values
                    for (let j = 0; j != length; j++) {
                        if (input[j] >= "a" && input[j] <= "z") { //checks for one lower case letter by comparing using ascii values
                            for (let k = 0; k != length; k++) {
                                if (input[k] >= "0" && input[k] <= "9") { //checks for one number character by comparing using ascii values
                                    return true;
                                }
                            }
                        }
                    }
                }
            }
        }
        return false;
    } else {
        return false;
    }
}

function stringReverse(password) {
    let length = password.length - 1;
    let revPw = "";
    for (let i = length; i != -1; i--) {    //traverses the parameter of stringReverse from the last index and concats each letter to a new string
        revPw = revPw + password[i];
    }
    return revPw;
}

function storePassword(name, pass1, pass2) {
    let newpass;
    if (validatePassword(pass1, pass2)) {   //checks if entered passwords are valid
        newpass = stringReverse(pass1); //reverse if valid
    } else {    // if not valid, first entered password in the function is set as newpassword
        newpass = pass1;
    }
    const user = { //creates user object
        name: name,
        newpass: newpass
    }
    return user;
}


console.log(storePassword("John", "Pass1234", "Pass1234"));

