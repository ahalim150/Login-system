let signinMail = document.querySelector("#SigninMail")
let signinPassword = document.querySelector("#SigninPw")
let signupName = document.querySelector("#SignupName")
let signupMail = document.querySelector("#SignupMail")
let signupPassword = document.querySelector("#SignupPw")
const siBtn = document.querySelector(".siBtn");
const suBtn = document.querySelector(".suBtn");
let signUpArray = [];

if (localStorage.getItem('users') == null) {
    signUpArray = []
} else {
    signUpArray = JSON.parse(localStorage.getItem('users'))
}

// to show the name of user in welcome page
var username = localStorage.getItem('userName')
document.querySelector(".welcome-msg").innerHTML = `Welcome ` + username

// to test if signUp values is empty
function isEmpty() {

    if (signupName.value == "" || signupMail.value == "" || signupPassword.value == "") {
        return false
    } else {
        return true
    }
}

// to test email is exist
function isEmailExist() {
    for (var i = 0; i < signUpArray.length; i++) {
        if (signUpArray[i].email.toLowerCase() == signupMail.value.toLowerCase()) {
            return false
        }
    }
}

// signUp function to add users and check exist
function signUp() {
    if (isEmpty() == false) {
        document.querySelector('.suComment').innerHTML = '<span class="text-danger m-3">All inputs is required</span>'
        return false
    }
    
    var signUp = {
        name: signupName.value,
        email: signupMail.value,
        password: signupPassword.value,
    }
    if (signUpArray.length == 0) {
        signUpArray.push(signUp)
        localStorage.setItem('users', JSON.stringify(signUpArray))
        document.querySelector('.suComment').innerHTML = '<span class="text-success m-3">Success</span>'
        return true
    }
    if (isEmailExist() == false) {
        document.querySelector('.suComment').innerHTML = '<span class="text-danger m-3">email already exists</span>'

    } else {
        signUpArray.push(signUp)
        localStorage.setItem('users', JSON.stringify(signUpArray))
        document.querySelector('.suComment').innerHTML = '<span class="text-success m-3">Success</span>'

    }
}

// to test logIn values is empty
function isLoginEmpty() {

    if (signinPassword.value == "" || signinMail.value == "") {
        return false
    } else {
        return true
    }
}

// signIn function to logIn to the welcome page
function login() {
    if (isLoginEmpty() == false) {
        document.querySelector('.siComment').innerHTML = '<span class="text-danger m-3">All inputs is required</span>'
        return false
    }
    var password = signinPassword.value
    var email = signinMail.value
    for (var i = 0; i < signUpArray.length; i++) {
        if (signUpArray[i].email.toLowerCase() == email.toLowerCase() && signUpArray[i].password.toLowerCase() == password.toLowerCase()) {
            localStorage.setItem('userName', signUpArray[i].name);
            window.open('welcome.htm', '_self');
        } 
        else {
            document.querySelector('.siComment').innerHTML = '<span class="p-2 text-danger">incorrect email or password</span>'
        }
    }
}

// to logOut of the user
function logOut() {
    window.open('index.htm', '_self')
}

