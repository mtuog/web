document.querySelector('#username').addEventListener('blur', validateUsername);
document.querySelector('#password').addEventListener('blur', validatePassword);

function validateUsername() {
    var username = document.querySelector('#username');
    var errorMessage = username.parentElement.querySelector('.error-message');

    if (username.value.trim() === '') {
        errorMessage.innerText = 'Bạn chưa nhập tên đăng nhập hoặc email.';
    } else {
        errorMessage.innerText = ''; // Xóa thông báo lỗi nếu hợp lệ.
    }
}

function validatePassword() {
    var password = document.querySelector('#password');
    var errorMessage = password.parentElement.querySelector('.error-message');

    if (password.value.trim() === '') {
        errorMessage.innerText = 'Bạn chưa nhập mật khẩu.';
    } else {
        errorMessage.innerText = ''; // Xóa thông báo lỗi nếu hợp lệ.
    }
}
