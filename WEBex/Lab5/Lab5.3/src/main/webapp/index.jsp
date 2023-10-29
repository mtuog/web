<%--
  Created by IntelliJ IDEA.
  User: Yukihira Souma
  Date: 15/10/2023
  Time: 9:11 SA
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>

    <title></title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <meta property="og:title" content="">
    <meta property="og:type" content="">
    <meta property="og:url" content="">
    <meta property="og:image" content="">
    <link rel="stylesheet" href="lab%203d/css/reset.css">
    <link rel="stylesheet" href="lab%203d/fontawesome-free-6.4.2-web/fontawesome-free-6.4.2-web/css/all.min.css">
    <link rel="manifest" href="lab%203d/site.webmanifest">
    <link rel="apple-touch-icon" href="lab%203d/icon.png">
    <!-- Place favicon.ico in the root directory -->

    <link rel="stylesheet" href="lab%203d/css/normalize.css">
    <link rel="stylesheet" href="lab%203d/css/main.css">

    <meta name="theme-color" content="#fafafa">
</head>
<body>
<h3><%=request.getAttribute("thongBaoLoi")!= null ? request.getAttribute("thongBaoLoi"): "" %></h3>
<form action="HomeController" method="post">
    <div class="root">
        <div class="content">
            <div class="label1"><span>Account</span></div>
            <div class="input1">
                <i class="fa-solid fa-user" style="color: #b1b4b9;"></i>
                <input name="lay_ten" onblur="validate_of_Name_Blur()" oninput="validate_of_Name_onInput()" class="inputName" type="text" placeholder="Full Name">
                <div class="lineUp"></div>
            </div>
            <span class="errorFullName"></span>
            <div class="input2">
                <i class="fa-solid fa-envelope" style="color: #b7b9c2;"></i>
                <input name="lay_email" onblur="validate_of_Email_Blur()" oninput="validate_of_Email_onInput()"  class="inputEmail" type="text" placeholder="Email Adress">
                <div class="lineUp2"></div>

            </div>
            <span class="errorEmail"></span>
            <div class="input3">
                <i class="fa-solid fa-lock" style="color: #b0b6bf;"></i>
                <input name="lay_pass" oninput="validate_of_Pass_onInput()" onblur="validate_of_Pass_Blur()" class="inputPassword" type="password" placeholder="Password">
                <div class="lineUp3"></div>
            </div>
            <span class="errorPassword"></span>
            <div class="dateOfBirth">
                <span>Date of Birth</span>
                <div><input class="dateInput" type="text" placeholder="DD"></div>
                <div><input class="monthInput" type="text" placeholder="MM"></div>
                <div><input class="yearInput" type="text" placeholder="YYYY"></div>
            </div>
            <div class="gender">
                <span>Gender</span>
                <input type="radio" id="button1" name="btn" class="btn" >
                <label  id="buttonMale" for="button1" class="btn-label">Male</label>

                <input type="radio" id="button2" name="btn" class="btn">
                <label id="buttonFemale" for="button2" class="btn-label">Female</label>
            </div>
            <div class="paymentDetails">
                <span>Payment Details</span>
                <input type="radio" id="button3" name="btn1" class="btn1" checked >
                <label  id="buttonCreditCard" for="button3" class="btn-label1">
                    <span>Credit Card</span></label>
                <i class="fa-brands fa-cc-visa" style="color: #dee2e8;"></i>

                <input type="radio" id="button4" name="btn1" class="btn1">

                <label id="buttonPaypal" for="button4" class="btn-label1">
                    <span>Paypal</span>
                </label>
                <i class="fa-brands fa-cc-paypal" style="color: #dee2e8;"></i>

            </div>
            <div class="input4">
                <i class="fa-solid fa-id-card" style="color:#b0b6bf "></i>
                <input onblur="validate_of_CardNumber_Blur()" oninput="validate_of_CardNumber_onInput()" class="inputCardNumber" type="text" placeholder="Card Number">
                <div class="lineUp3"></div>
            </div>
            <span class="errorCardNumber"></span>
            <div class="input5">
                <i class="fa-solid fa-user" style="color: #b1b4b9;"></i>
                <input onblur="validate_of_CardCVC_Blur()" oninput="validate_of_CardCVC_onInput()" class="inputCardCVC" type="text" placeholder="Card CVC" >
                <div class="lineUp"></div>
            </div>
            <span class="errorCardCVC"></span>
            <div class="button_Year_CardCVC">



                <select class="value_Month" name="" >
                    <option value="">01 Jan</option>
                    <option value="">02 Feb</option>
                    <option value="">03 Mar</option>
                    <option value="">04 Apr</option>
                    <option value="">05 May</option>
                    <option value="">06 Jun</option>
                    <option value="">07 July</option>
                    <option value="">08 Aug</option>
                    <option value="">09 Sep</option>
                    <option value="">10 Oct</option>
                    <option value="">11 Nov</option>
                    <option value="">12 Dec</option>
                </select>

                <select class="value_Year" name="" >
                    <option value="">2023</option>
                    <option value="">2022</option>
                    <option value="">2021</option>
                    <option value="">2020</option>
                    <option value="">2019</option>
                    <option value="">2018</option>
                    <option value="">2017</option>
                    <option value="">2016</option>
                    <option value="">2015</option>
                    <option value="">2014</option>
                    <option value="">2013</option>
                    <option value="">2012</option>
                    <option value="">2010</option>
                    <option value="">2009</option>
                    <option value="">2008</option>
                    <option value="">2007</option>
                    <option value="">2006</option>
                    <option value="">2005</option>
                    <option value="">2004</option>
                    <option value="">2003</option>
                    <option value="">2002</option>
                    <option value="">2001</option>
                    <option value="">2000</option>

                </select>

            </div>
            <div class="label_Terms_and_Conditions">
                <span>Terms and Conditions</span>
            </div>
            <div class="agree_Condition">
                <input type="checkbox" id="myCheckbox">
                <span>I accept the terms and conditions for singing up to this services, and hereby confirm I have read the private policy</span>
            </div>
            <div>
                <input style="  position: absolute;

  top: 800px;
  left: 20px;" class="nutSubmit" type="submit" value="Submit">
            </div>
            <div></div>
            <div></div>
        </div>
    </div>
</form>
<script src="lab%203d/js/validate.js"></script>
</body>
</html>
