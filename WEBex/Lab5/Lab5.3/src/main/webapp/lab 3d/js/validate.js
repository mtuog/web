
// Name
validate_of_Name_Blur = function () {
  var theInputName = document.querySelector('.inputName');

    if(theInputName.value.trim()==='') {
      document.querySelector('.errorFullName').innerText ='Bạn chưa nhập tên, vui lòng nhập tên';
      document.querySelector('.input1').classList.add('invalid');
    }

}
validate_of_Name_onInput = function () {
  var theInputName = document.querySelector('.inputName');

  if(theInputName.value.trim().length >=2) {
    document.querySelector('.errorFullName').innerText ='';
    document.querySelector('.input1').classList.remove('invalid');
  }
}
// Email
validate_of_Email_Blur = function () {
  var theInputEmail = document.querySelector('.inputEmail');

  if(theInputEmail.value.trim()==='') {
    document.querySelector('.errorEmail').innerText ='Bạn chưa nhập email, vui lòng nhập email';
    document.querySelector('.input2').classList.add('invalid');
  }
}
validate_of_Email_onInput = function () {
  var theInputEmail = document.querySelector('.inputEmail');
  var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if(regex.test(theInputEmail.value)) {
    document.querySelector('.errorEmail').innerText ='';
    document.querySelector('.input2').classList.remove('invalid');
  } else {
    document.querySelector('.errorEmail').innerText ='';
    document.querySelector('.input2').classList.remove('invalid');

    document.querySelector('.errorEmail').innerText ='Email bạn nhập không hợp lệ, vui lòng nhập lại';
    document.querySelector('.input2').classList.add('invalid');
  }
}
// Pass
validate_of_Pass_Blur = function () {
  var theInputPass = document.querySelector('.inputPassword');

  if(theInputPass.value==='') {
    document.querySelector('.errorPassword').innerText ='Bạn chưa nhập mật khẩu, vui lòng nhập mật khẩu';
    document.querySelector('.input3').classList.add('invalid');
  } else {
    if(theInputPass.value.length <6) {
      document.querySelector('.errorPassword').innerText ='';
      document.querySelector('.input3').classList.remove('invalid');
      document.querySelector('.errorPassword').innerText ='Mật khẩu chưa có độ dài lớn hơn hoặc bằng 6 kí tự. Vui lòng nhập lại';
      document.querySelector('.input3').classList.add('invalid');
    }
  }

}
validate_of_Pass_onInput = function () {
  var theInputPass = document.querySelector('.inputPassword');


  if(theInputPass.value.length >=6) {
    document.querySelector('.errorPassword').innerText ='';
    document.querySelector('.input3').classList.remove('invalid');

  } else {
    // document.querySelector('.errorPassword').innerText ='';
    // document.querySelector('.input3').classList.remove('invalid');
    //
    // document.querySelector('.errorPassword').innerText ='Mật khẩu chưa có độ dài lớn hơn hoặc bằng 6 kí tự. Vui lòng nhập lại';
    // document.querySelector('.input3').classList.add('invalid');
  }

}
//   Card Number
validate_of_CardNumber_Blur = function () {
  var theInputCardNumber = document.querySelector('.inputCardNumber');

  if(theInputCardNumber.value.trim()==='') {
    document.querySelector('.errorCardNumber').innerText ='Bạn chưa nhập Card Number, vui lòng nhập Card Number';
    document.querySelector('.input4').classList.add('invalid');
  } else {
    if(isNaN(parseInt(theInputCardNumber.value.trim()))) {
      document.querySelector('.errorCardNumber').innerText ='Bạn nhập không đúng Card Number, vui lòng nhập lại Card Number';
      document.querySelector('.input4').classList.add('invalid');
    }
  }

}
validate_of_CardNumber_onInput = function () {
  var theInputEmail = document.querySelector('.inputEmail');



  document.querySelector('.errorCardNumber').innerText ='';
  document.querySelector('.input4').classList.remove('invalid');



}
// Card CVC

validate_of_CardCVC_Blur = function () {
  var theInputCardCVC = document.querySelector('.inputCardCVC');

  if(theInputCardCVC.value.trim()==='') {
    document.querySelector('.errorCardCVC').innerText ='Bạn chưa nhập Card CVC, vui lòng nhập Card CVC';
    document.querySelector('.input5').classList.add('invalid');
  } else {
    if(isNaN(parseInt(theInputCardCVC.value.trim()))) {
      document.querySelector('.errorCardCVC').innerText ='Bạn nhập không đúng Card CVC, vui lòng nhập lại Card CVC';
      document.querySelector('.input5').classList.add('invalid');
    }
  }

}
validate_of_CardCVC_onInput = function () {
  var theInputCardCVC = document.querySelector('.inputCardCVC');



  document.querySelector('.errorCardCVC').innerText ='';
  document.querySelector('.input5').classList.remove('invalid');



}
