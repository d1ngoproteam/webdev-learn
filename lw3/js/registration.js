function registration(event){
  var email = document.getElementById('email');
  var pass = document.getElementById('password');
  var passCheck = document.getElementById('password_repeat');
  var agreement = document.getElementById('check_agreement');  
  var emailCheck = (/[^\s@]+@[^\s@]+\.[^\s@]+/.test(email.value));

  event.preventDefault();
  if ((email.value == "") || (pass.value == "") || (passCheck.value == "")){
    alert("Введите данные"); 
    return;
    } else {
      if ((email.value.length < 5) || (!emailCheck)) {
          alert("Email введен некорректно");
          return;
      }
      if ((pass.value.length < 6) || (pass == "") || (passCheck == "")) {
          alert("Длина пароля должна быть не менее 6-ти символов");
          return;
      }
      if (pass.value != passCheck.value) {
          alert("Введеные пароли не совпадают");
          return;
      }
      if (!agreement.checked){
          alert("Примите условия пользовательского соглашение");
          return;
      }
      alert("Регистрация успешна!");
      }
  }
  
  window.onload = function(){
    document.getElementById("registration").addEventListener("submit", registration);
  };
