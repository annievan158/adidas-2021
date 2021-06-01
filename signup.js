// FORM VALIDATION

function validateEmail(email) { // Term of email 
    var count = 0;
    for (var i = 0; i < email.length; i++) {
        if (email[i] == "@")
            count++;
    }
    return count == 1;
  }
  
  function validatePsw(psw) { // Term of password 
    if (psw.length < 6) //min 6 characters
        return false;
    
    var flagSpecialChar = false; // min 1 special characters
    var flagCapital = false; //min 1 capital characters
    for (var i = 0; i < psw.length; i++) {
        if (!(psw[i] >= "A" && psw[i] <= "Z" || psw[i] >= "a" && psw[i] <= "z"))
            flagSpecialChar = true;
        else if (psw[i] >= "A" && psw[i] <= "Z")
            flagCapital = true;
    }
    console.log(flagSpecialChar, flagCapital);
    return flagSpecialChar && flagCapital;
  }
// Email 
  let email = document.forms['form']['email'];
  email.onblur = function () {
    var flagSuccess = true;
        if (!validateEmail(email.value)) {
            document.getElementById("err-email").innerHTML = "Vui lòng nhập đúng định dạng email.";
            flagSuccess = false;
        }
        else {
            document.getElementById("err-email").innerHTML = "";
        }
  }
// Check password
  let psw = document.forms['form']['psw'];
  psw.onblur = function () {
    if (!validatePsw(psw.value)) {
        document.getElementById("err-psw").innerHTML = "Password có ít nhất 6 ký tự, có ít nhất 1 ký tự đặc biệt, có ít nhất 1 ký tự hoa";
        flagSuccess = false;
      }
      else {
          document.getElementById("err-psw").innerHTML = "";
      }
  }
// Repeat password
  let pswRepeat = document.forms['form']['psw-repeat'];
  pswRepeat.onblur = function () {
    if (psw.value != pswRepeat.value) {
        document.getElementById("err-psw-repeat").innerHTML = "Mật khẩu này phải đúng với mật khẩu trên.";
        flagSuccess = false;
    }
    else {
        document.getElementById("err-psw-repeat").innerHTML = "";
    }
  }
// First name
  let firstName = document.forms['form']['firstname'];
  firstName.onblur = function () {
    if(firstName.value == ""){
      document.getElementById("err-firstname").innerHTML = "Yêu cầu phải điền trường thông tin này ";
    }
    else{ 
      document.getElementById("err-firstname").innerHTML =" ";
    }
  }
// Last name 
  let lastName = document.forms['form']['lastname'];
  lastName.onblur = function () {
    if(lastName.value == ""){
      document.getElementById("err-lastname").innerHTML = "Yêu cầu phải điền trường thông tin này ";
    }
    else{ 
      document.getElementById("err-lastname").innerHTML =" ";
    }
  }

  // Success Box
  const successBox = document.getElementsByClassName("box-success");
  let signUpBtn = document.getElementsByClassName("form-btn")[0];
  signUpBtn.onclick = function(){
    if(!email == "" && !psw =="" && !pswRepeat == "" && !firstName == ""&& !lastName == "")
    successBox[0].style.display="block";
  }


/*
// Onclick
  var signUpBtn = document.getElementsByClassName("form-btn")[0];
  signUpBtn.onclick = function(){
    var firstName = document.forms['form']['firstname'];
    var lastName = document.forms['form']['lastname'];
    var psw = document.forms['form']['psw'];
    var pswRepeat = document.forms['form']['psw-repeat'];
    var email = document.forms['form']['email'];
    // Check
    var flagSuccess = true;
        if (!validateEmail(email.value)) {
            document.getElementById("err-email").innerHTML = "Vui lòng nhập đúng định dạng email.";
            flagSuccess = false;
        }
        else {
            document.getElementById("err-email").innerHTML = "";
        }
  
        if (!validatePsw(psw.value)) {
            document.getElementById("err-psw").innerHTML = "Password có ít nhất 6 ký tự, có ít nhất 1 ký tự đặc biệt, có ít nhất 1 ký tự hoa";
            flagSuccess = false;
        }
        else {
            document.getElementById("err-psw").innerHTML = "";
        }
  
        if (psw.value != pswRepeat.value) {
            document.getElementById("err-psw-repeat").innerHTML = "Mật khẩu này phải đúng với mật khẩu trên.";
            flagSuccess = false;
        }
        else {
            document.getElementById("err-psw-repeat").innerHTML = "";
        }
  
        if(firstName.value == ""){
          document.getElementById("err-firstname").innerHTML = "Yêu cầu phải điền trường thông tin này ";
        }
        else{ 
          document.getElementById("err-firstname").innerHTML =" ";
        }
        if(lastName.value == ""){
          document.getElementById("err-lastname").innerHTML = "Yêu cầu phải điền trường thông tin này ";
        }
        else{ 
          document.getElementById("err-lastname").innerHTML =" ";
        }
  }
*/