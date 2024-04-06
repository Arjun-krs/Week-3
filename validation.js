const form = document.querySelector('#form')
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const cpassword = document.querySelector('#cpassword');
const phone = document.querySelector('#phn');
const male = document.querySelector('#male');
const female = document.querySelector('#female');
const pvn = document.querySelector('#pvn');
const vj = document.querySelector('#vj');
const aru = document.querySelector('#aru');
const arun = document.querySelector('#arun');


form.addEventListener('submit', (e) => {

    if (!validateInputs()) {
        e.preventDefault();
    }
})

function validateInputs() {
    const usernameVal = username.value.trim()
    const emailVal = email.value.trim();
    const passwordVal = password.value.trim();
    const cpasswordVal = cpassword.value.trim();
    const phoneVal = phone.value.trim();
    const maleVal = male.checked;
    const femaleVal = female.checked;
    const vjVal = vj.checked;
    const pvnVal = pvn.checked;
    const aruVal = aru.checked;
    const arunVal = arun.checked;

    let success = true

    if (usernameVal === '') {
        success = false;
        setError(username, 'Username is required')
    }
    else {
        setSuccess(username)
    }

    if (!maleVal && !femaleVal) {
        success=false;
        setError(male, 'Please select your gender')
    }
    else {
        setSuccess(male)
    }
    if (!pvnVal && !vjVal && !aruVal && !arunVal) {
        success = false;
        setError(pvn, 'Please select your favorite staff')
    }
    else {
        setSuccess(pvn)
    }
    if (emailVal === '') {
        success = false;
        setError(email, 'Email is required')
    }
    else if (!validateEmail(emailVal)) {
        success = false;
        setError(email, 'Please enter a valid email')
    }
    else {
        setSuccess(email)
    }

    if (passwordVal === '') {
        success = false;
        setError(password, 'Password is required')
    }
    else if (passwordVal.length < 8) {
        success = false;
        setError(password, 'Password must be atleast 8 characters long')
    }
    else {
        setSuccess(password)
    }

    if (cpasswordVal === '') {
        success = false;
        setError(cpassword, 'Confirm password is required')
    }
    else if (cpasswordVal !== passwordVal) {
        success = false;
        setError(cpassword, 'Password does not match')
    }
    else {
        setSuccess(cpassword)
    }
    if (phoneVal === '') {
        success = false;
        setError(phone, 'Phone number is required');
    } else if (!validatePhoneNumber(phoneVal)) {
        success = false;
        setError(phone, 'Please enter a valid phone number');
    } else {
        setSuccess(phone);
    }

    return success;

}

function setError(element, message) {
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error')

    errorElement.innerText = message;
    inputGroup.classList.add('error')
    inputGroup.classList.remove('success')
}

function setSuccess(element) {
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error')

    errorElement.innerText = '';
    inputGroup.classList.add('success')
    inputGroup.classList.remove('error')
}
const validateEmail = (email) => {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
};
const validatePhoneNumber = (phone) => {
    return phone.match(/^\d{3}[\s-]?\d{3}[\s-]?\d{4}$/);
};