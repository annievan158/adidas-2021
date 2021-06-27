// FORM LOGIN 





// ONBLUR

// let psw = document.forms['form']['psw'];
// psw.onblur = function () {
//   if(psw.value == ""){
//     document.getElementById("err-login-psw").innerHTML = "Yêu cầu phải điền trường thông tin này ";
//   }
//   else{ 
//     document.getElementById("err-login-psw").innerHTML ="  ";
//   }
// }

// let email = document.forms['form']['email'];
// email.onblur = function () {
//   if(email.value == ""){
//     document.getElementById("err-login-psw").innerHTML = "Yêu cầu phải điền trường thông tin này ";
//   }
//   else{ 
//     document.getElementById("err-login-psw").innerHTML =" ";
//   }
// }


// ONCLICK
let loginBtn = document.getElementsByClassName("form-btn")[0];
loginBtn.onclick = function(){
  var email = document.forms['form']['email'];
  var psw = document.forms['form']['psw'];
  if(email.value == ""){
    document.getElementById("err-login-psw").innerHTML = "Yêu cầu phải điền trường thông tin này ";
  }
  else{ 
    document.getElementById("err-login-psw").innerHTML =" ";
  }
  if(psw.value == ""){
    document.getElementById("err-login-psw").innerHTML = "Yêu cầu phải điền trường thông tin này ";
  }
  else{ 
    document.getElementById("err-login-psw").innerHTML ="  ";
  }
}