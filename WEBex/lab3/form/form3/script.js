// Thêm sự kiện khi trường input được tập trung vào
document.querySelectorAll('input[type="text"], input[type="email"], input[type="password"], input[type="number"]').forEach(function(input) {
    input.addEventListener('focus', function() {
        input.classList.remove('error'); // Loại bỏ lớp error để xóa màu đỏ khi trường được tập trung
        var errorMessage = input.parentElement.querySelector('.error-message');
        errorMessage.innerText = '';
    });

    input.addEventListener('blur', function() {
        if (input.value.trim() === '') {
            input.classList.add('error'); // Thêm lớp error để thay đổi màu viền thành đỏ
            var errorMessage = input.parentElement.querySelector('.error-message');
            errorMessage.innerText = 'Trường này không thể để trống.';
        }
    });
});
