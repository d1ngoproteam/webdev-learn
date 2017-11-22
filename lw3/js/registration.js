$(document).ready(function()
{
    $('#registration').submit(function(event)
  {
    event.preventDefault();
    var email = $("#email").val();
    var pass = $("#password").val();
    var passCheck = $("#password_repeat").val();
    var agreement = $("#check_agreement").prop("checked");
    var emailCheck = (/[^\s@]+@[^\s@]+\.[^\s@]+/.test(email));
  
    if ((email.length < 5) || (!emailCheck)) {
      alert("Ошибка ввода Email.");
      return;
    }
    if ((pass.length < 6) || (pass == "") || (passCheck == "")) {
      alert("Ошибка ввода пароля");
      return;
    }
    if (pass != passCheck) {
      alert("Пароли должны совпадать");
      return;
    }
    if (!agreement){
      alert("Вы должны принять пользовательское соглашение");
      return;
    }
    alert("Регистрация успешна");
  });
});