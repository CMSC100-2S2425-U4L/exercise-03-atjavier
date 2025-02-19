function validatePassword(input, password) {
    let flag = false;
    let length = input.length;

    if (input === password) {
        for (let i = 0; i != length; i++) {
            if (input[i] >= "A" && input[i] <= "Z") {
                for (let j = 0; j != length; j++) {
                    if (input[j] >= "a" && input[j] <= "z") {
                        for (let k = 0; k != length; k++) {
                            if (input[k] >= "0" && input[k] <= "9") {
                                return true;
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
    for (let i = length; i != -1; i--) {
        revPw = revPw + password[i];
    }
    return revPw;
}

function createUser(name, pass1, pass2) {
    let newpass;
    if (validatePassword(pass1, pass2)) {
        newpass = stringReverse(pass1);
    } else {
        newpass = pass1;
    }
    const user = {
        name: name,
        newpass: newpass
    }
    return user;
}

// console.log(createUser("John", "Pass12345", "Pass12345"));



