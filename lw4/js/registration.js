$(document).ready(function(){
  $('#registration_form').submit(function(event){
  event.preventDefault();
  var userEmail = $("#email").val();
  var userPass = $("#password").val();
  var userPassCheck = $("#passwordcheck").val();
  var userAgreement = $("#checkagreement").prop("checked");
  var emailCheck = (/[^\s@]+@[^\s@]+\.[^\s@]+/.test(userEmail));

  if ((userEmail.length < 5) || (!emailCheck)) {
    alert("Ошибка ввода Email.");
    return;
  }

  if ((userPass.length < 6) || (userPass == "") || (userPassCheck == "")) {
    alert("Ошибка ввода пароля");
    return;
  }

  if (userPass != userPassCheck) {
    alert("Пароли должны совпадать");
    return;
  }

  if (!userAgreement){
    alert("Вы должны принять пользовательское соглашение");
    return;
  }

  alert("Регистрация успешна");
  });
});