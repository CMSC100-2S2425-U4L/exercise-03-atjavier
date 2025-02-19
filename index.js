const re = /(?=.*[A-Z])(?=.*[a-z])(?=.*\d)[a-zA-Z\d]{8,}/;

function validatePassword (input, password) {
    if (re.test(input) && re.test(password)) {
        if(input === password){
            return true;
        } else{
            return false;
        }
    } else {
        return false;
    }
}

function stringReverse (password) {
    let length = password.length-1;
    let revPw = "";
    for (let i = length; i!=-1; i--){
        revPw = revPw+password[i];
    }
    return revPw;
}

function createUser (name, pass1, pass2) {
    let newpass;
    if (validatePassword(pass1, pass2)){
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

console.log(createUser("John", "Pass123", "Pass12345"));



