<!doctype html>
<html class="no-js" lang="">
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>

<head>
  <%@ page isELIgnored="false" %>
  <meta charset="utf-8">
  <title></title>
  <meta name="description" content="">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <meta property="og:title" content="">
  <meta property="og:type" content="">
  <meta property="og:url" content="">
  <meta property="og:image" content="">
  <link rel="stylesheet" href="lab3b/css/reset.css">
  <link rel="manifest" href="lab3b/site.webmanifest">
  <link rel="apple-touch-icon" href="lab3b/icon.png">
  <!-- Place favicon.ico in the root directory -->

  <link rel="stylesheet" href="lab3b/css/normalize.css">
  <link rel="stylesheet" href="lab3b/css/main.css">
  <link rel="stylesheet" href="lab3b/fontawesome-free-6.4.2-web/fontawesome-free-6.4.2-web/css/all.min.css">
  <meta name="theme-color" content="#fafafa">
</head>
<form action="HomeController" method="post">
  <div class="formDangKy">
    <div class="content">
      <div class="sub_content_1">
        <span>Contact Us</span>
      </div>
      <div class="sub_content_2">
        <div class="lable_content_2"><span>FULL NAME *</span></div>
        <input name="lay_ten" onblur="validate_of_Name_Blur()" oninput="validate_of_Name_onInput()" class="name_content_2" type="text" placeholder="Enter your name">
        <span class="errorName"></span>
      </div>
      <div class="sub_content_3">
        <div class="lable_content_2"><span>EMAIL *</span></div>

        <input name="Lay_email" oninput="validate_of_Email_onInput()" onblur="validate_of_Email_Blur()" class="name_content_3" type="text" placeholder="Enter Your Email">
        <span class="errorEmail"></span>
      </div>
      <div class="sub_content_4">
        <div class="lable_content_2"><span>PHONE *</span></div>

        <input name="lay_phone" onblur="validate_of_Phone_Blur()" oninput="validate_of_Phone_onInput()" class="name_content_4" type="text" placeholder="Enter Your Phone">
        <span class="errorPhone"></span>
      </div>
      <div class="sub_content_5">
        <div class="lable_content_2"><span>NEEDED SERVICES *</span></div>
        <div class="name_content_2"><span style="color: black"></span>
          <select name="" >
            <option value="" disabled selected >Please chooses</option>
            <option>Service 1</option>
            <option>Service 2</option>
            <option>Service 3</option>
          </select>
        </div>
        <i class="fa-solid fa-angle-up" style="color: #1d1e20;"></i>
        <i class="fa-solid fa-chevron-down" style="color: #1b1c1d;"></i>
      </div>
      <div class="sub_content_6">
        <div class="lable_content_2"><span>MEESAGE *</span></div>

        <textarea name="lay_content" onblur="validate_of_Content_Blur()" oninput="validate_of_Cotent_onInput()" class="text-area" id="" cols="75" rows="5" placeholder="Your message here"></textarea>
        <span class="errorContent"></span>
      </div>
      <div class="sub_content_7">
        <input class="NutNhan" type="submit" style="color: white; background-color:hsl(0deg 0% 20%) " value="Submit"></input>
        <i class="fa-solid fa-arrow-right" style="color: white;"></i>
      </div>
    </div>
  </div>
  </form>
<div style="color: red"><%=request.getAttribute("thongBaoLoi")!= null ? request.getAttribute("thongBaoLoi"): "" %></div>
<script src="lab3b/js/validate.js"></script>
<body>


</body>

</html>
