
    document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('.form-container form');
    form.addEventListener('submit', function (event) {
    event.preventDefault();
    clearErrors();

    const fullname = document.getElementById('fullname');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const day = document.getElementById('day');
    const month = document.getElementById('month');
    const year = document.getElementById('year');
    const cardNumber = document.getElementById('card-number');
    const cardCVC = document.getElementById('card-cvc');
    const terms = document.getElementById('terms');

    let isValid = true;

    if (fullname.value.trim() === '') {
    displayError(fullname, 'Full Name is required.');
    isValid = false;
}

    if (email.value.trim() === '') {
    displayError(email, 'Email is required.');
    isValid = false;
} else if (!isValidEmail(email.value)) {
    displayError(email, 'Invalid email format.');
    isValid = false;
}

    if (password.value.trim() === '') {
    displayError(password, 'Password is required.');
    isValid = false;
}

    if (day.value.trim() === '' || month.value.trim() === '' || year.value.trim() === '') {
    displayError(day, 'Date of Birth is required.');
    isValid = false;
}

    if (!document.querySelector('.gender-button:checked')) {
    displayError(document.querySelector('.gender-container'), 'Gender is required.');
    isValid = false;
}

    if (!document.querySelector('.payment-button:checked')) {
    displayError(document.querySelector('.input-container-column'), 'Payment method is required.');
    isValid = false;
}

    if (cardNumber.value.trim() === '') {
    displayError(cardNumber, 'Card number is required.');
    isValid = false;
}

    if (cardCVC.value.trim() === '') {
    displayError(cardCVC, 'Card CVC is required.');
    isValid = false;
}

    if (!terms.checked) {
    displayError(terms, 'You must accept the Terms and Conditions.');
    isValid = false;
}

    if (isValid) {
    alert('Form submitted successfully.'); // Replace with your submission logic
}
});

    function isValidEmail(email) {
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return regex.test(email);
}

    function displayError(inputElement, errorMessage) {
    inputElement.classList.add('invalid');
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.textContent = errorMessage;
    inputElement.parentNode.appendChild(errorDiv);
}

    function clearErrors() {
    const errorElements = document.querySelectorAll('.error-message');
    errorElements.forEach(function (element) {
    element.remove();
});

    const inputElements = document.querySelectorAll('.invalid');
    inputElements.forEach(function (element) {
    element.classList.remove('invalid');
});
}
});
