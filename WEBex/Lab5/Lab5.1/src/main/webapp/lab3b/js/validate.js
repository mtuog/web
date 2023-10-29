// Name
validate_of_Name_Blur = function () {
  var theInputName = document.querySelector('.name_content_2');

  if (theInputName.value.trim() === '') {
    document.querySelector('.errorName').innerText = 'Bạn chưa nhập tên, vui lòng nhập tên';
    document.querySelector('.sub_content_2').classList.add('invalid');
  }

}
validate_of_Name_onInput = function () {
  var theInputName = document.querySelector('.name_content_2');

  if (theInputName.value.trim().length >= 2) {
    document.querySelector('.errorName').innerText = '';
    document.querySelector('.sub_content_2').classList.remove('invalid');
  }
}
//Email
validate_of_Email_Blur = function () {
  var theInputEmail = document.querySelector('.name_content_3');

  if (theInputEmail.value.trim() === '') {
    document.querySelector('.errorEmail').innerText = 'Bạn chưa nhập email, vui lòng nhập email';
    document.querySelector('.sub_content_3').classList.add('invalid');
  } else {
    var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!regex.test(theInputEmail.value)) {
      document.querySelector('.errorEmail').innerText = 'Email không hợp lệ, vui lòng nhập lại';
      document.querySelector('.sub_content_3').classList.add('invalid');
    }
  }


}
validate_of_Email_onInput = function () {


  document.querySelector('.errorEmail').innerText = '';
  document.querySelector('.sub_content_3').classList.remove('invalid');


}
//Phone
validate_of_Phone_Blur = function () {
  var theInputPhone = document.querySelector('.name_content_4');

  if (theInputPhone.value.trim() === '') {
    document.querySelector('.errorPhone').innerText = 'Bạn chưa nhập số điện thoại, vui lòng nhập số điện thoại';
    document.querySelector('.sub_content_4').classList.add('invalid');
  } else {
    var regex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    if (!regex.test(theInputPhone.value)) {
      document.querySelector('.errorPhone').innerText = 'Số điện thoại không hợp lệ, vui lòng nhập lại';
      document.querySelector('.sub_content_4').classList.add('invalid');
    }
  }


}
validate_of_Phone_onInput = function () {


  document.querySelector('.errorPhone').innerText = '';
  document.querySelector('.sub_content_4').classList.remove('invalid');


}

// Content
validate_of_Content_Blur = function () {
  var theInputContent = document.querySelector('.text-area');

  if (theInputContent.value === '') {
    document.querySelector('.errorContent').innerText = 'Bạn chưa nhập nội dung, vui lòng nhập nội dung';
    document.querySelector('.sub_content_6').classList.add('invalid');
  } else {
    if (theInputContent.value.length < 20) {
      document.querySelector('.errorContent').innerText = '';
      document.querySelector('.sub_content_6').classList.remove('invalid');
      document.querySelector('.errorContent').innerText = 'Nội dung quá ngắn, vui lòng nhập tổi thiếu trên 20 kí tự';
      document.querySelector('.sub_content_6').classList.add('invalid');
    }
  }

}
validate_of_Cotent_onInput = function () {
  var theInputContent = document.querySelector('.name_content_2');


    document.querySelector('.errorContent').innerText = '';
    document.querySelector('.sub_content_6').classList.remove('invalid');


}
