// Name
validate_of_Name_Blur = function () {
  var theInputName = document.querySelector('.userNameInput');

  if(theInputName.value.trim()==='') {
    document.querySelector('.username_or_email').innerText ='Bạn chưa nhập tên, vui lòng nhập tên';
    document.querySelector('.userNameInput').classList.add('invalid');
  } else {
    var theInputEmail = document.querySelector('.userNameInput');
    var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

     if(regex.test(theInputEmail.value)) {
      document.querySelector('.username_or_email').innerText ='';
      document.querySelector('.userNameInput').classList.remove('invalid');
    } else {
      document.querySelector('.username_or_email').innerText ='';
      document.querySelector('.userNameInput').classList.remove('invalid');

      document.querySelector('.username_or_email').innerText ='Email bạn nhập không hợp lệ, vui lòng nhập lại';
      document.querySelector('.userNameInput').classList.add('invalid');
    }
  }

}
validate_of_Name_onInput = function () {
  var theInputName = document.querySelector('.userNameInput');

  if(theInputName.value.trim().length >=2) {
    document.querySelector('.username_or_email').innerText ='';
    document.querySelector('.userNameInput').classList.remove('invalid');
  }
}
//Pass
validate_of_Pass_Blur = function () {
  var theInputName = document.querySelector('.password');

  if(theInputName.value.trim()==='') {
    document.querySelector('.password_Validate').innerText ='Bạn chưa nhập mật khẩu, vui lòng nhập mật khẩu';
    document.querySelector('.password').classList.add('invalid');
  } else {
    if(theInputName.value.trim().length <6) {
      document.querySelector('.password_Validate').innerText ='';
      document.querySelector('.password').classList.remove('invalid');
      document.querySelector('.password_Validate').innerText ='Mật khẩu tối thiểu 6 kí tự, vui lòng nhập lại';
      document.querySelector('.password').classList.add('invalid');
    }

  }

}
validate_of_Pass_onInput = function () {
  var theInputName = document.querySelector('.password');

  if(theInputName.value.trim().length >=6) {
    document.querySelector('.password_Validate').innerText ='';
    document.querySelector('.password').classList.remove('invalid');
  } else {

  }
}
