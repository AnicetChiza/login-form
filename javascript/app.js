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