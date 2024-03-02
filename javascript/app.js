let signupbtn = document.querySelector('.signupBtn');
let signinbtn = document.querySelector('.signinBtn');
let text = document.querySelector('.title');
let inputfield = document.querySelector('.name');

signinbtn.onclick = function() {
    inputfield.style.display = 'none';
    text.innerHTML = 'Sing in';
    signupbtn.classList.add('disable');
    signinbtn.classList.remove('disable');
}

signupbtn.onclick = function() {
    inputfield.style.display = 'inline-block';
    text.innerHTML = 'Create Account';
    inputfield.style.display = '';
    signinbtn.classList.add('disable');
    signupbtn.classList.remove('disable');
}


function validateForm() {
    let names = document.querySelector('.name').value.trim();
    let email = document.querySelector('.email').value.trim();
    let password = document.querySelector('.password').value.trim();
    let errorName = document.querySelector('.error-name');
    let errorEmail = document.querySelector('.error-email');
    let errorPassword = document.querySelector('.error-password');

    if (names == '') {
        errorName.style.display = 'inline-block';
        return false;
    }

    if (email == '') {
        errorEmail.style.display = 'inline-block';
        return false;
    }
    if (password == '') {
        errorPassword.style.display = 'inline-block';
    }
    return true;
}