<!doctype html>
<html class="no-js" lang="">

<head>
  <meta charset="utf-8">
  <title></title>
  <meta name="description" content="">
  <meta name="viewport" content="width=device-width, initial-scale=1">
    <%@ page contentType="text/html;charset=UTF-8" language="java" %>
  <meta property="og:title" content="">
  <meta property="og:type" content="">
  <meta property="og:url" content="">
  <meta property="og:image" content="">
  <link rel="stylesheet" href="lab%203c/css/reset.css">
  <link rel="stylesheet" href="lab%203c/fontawesome-free-6.4.2-web/fontawesome-free-6.4.2-web/css/all.min.css">
  <link rel="manifest" href="lab%203c/site.webmanifest">
  <link rel="apple-touch-icon" href="lab%203c/icon.png">
  <!-- Place favicon.ico in the root directory -->

  <link rel="stylesheet" href="lab%203c/css/normalize.css">
  <link rel="stylesheet" href="lab%203c/css/main.css">

  <meta name="theme-color" content="#fafafa">
</head>

<body>
<form action="HomeController" method="post">
    <div class="root">
        <div style="color: red"><%=request.getAttribute("thongBaoLoi")!= null ? request.getAttribute("thongBaoLoi"): "" %></div>
        <img class="anhBackground" src="lab%203c/img/bg-01.jpg" alt="">
        <div class="content">
            <div class="title">
                <span style="color: hsl(294.29deg 8.57% 51.96%)">Sign In</span>

            </div>

            <input name="lay_ten" onblur="validate_of_Name_Blur()" oninput="validate_of_Name_onInput()"  class="userNameInput" type="text" placeholder="username or email" style="color: hsl(294.29deg 43.38% 26.05%)">
            <span class="username_or_email"></span>
            <input name="lay_pass"  onblur="validate_of_Pass_Blur()" oninput="validate_of_Pass_onInput()" class="password" type="password" placeholder="password" style="color: hsl(294.29deg 43.38% 26.05%)">
            <span class="password_Validate"></span>
            <input class="buttonSubmit" type="submit" value="SIGN IN">
            <div class="label">Or log in with</div>
            <div class="icon1">
                <i class="fa-brands fa-facebook-f fa-xl" style="color: #0b5be5;"></i>
            </div>
            <div class="icon2">
                <i class="fa-brands fa-google fa-xl" style="color: #e31c1c;"></i>
            </div>
            <div class="singupWeb">
                <a href="">Sign up</a>
            </div>
        </div>
    </div>
</form>

<script src="lab%203c/js/validate.js"></script>
</body>

</html>
