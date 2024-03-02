function validateForm() {
    let names = document.querySelector('.name').value.trim();
    let email = document.querySelector('.email').value.trim();
    let password = document.querySelector('.password').value.trim();
    let errorName = document.querySelector('.error-name');
    let errorEmail = document.querySelector('.error-email');
    let errorPassword = document.querySelector('.error-password');
    let emptyData = document.querySelector('.empty-data');

    if (names === '' && email === '' && password === '') {
        emptyData.style.display = 'inline-block';
        return false;
    }
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
        return false;
    }
    return true;
}