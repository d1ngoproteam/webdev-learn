$(document).ready(function(){
    $('#registration').submit(function(event){
    event.preventDefault();
    var Email = $("#email").val();
    var Pass = $("#password").val();
    var PassCheck = $("#password_repeat").val();
    var Agreement = $("#check_agreement").prop("checked");
    var emailCheck = (/[^\s@]+@[^\s@]+\.[^\s@]+/.test(Email));
  
    if ((Email.length < 5) || (!emailCheck)) {
      alert("Ошибка ввода Email.");
      return;
    }
  
    if ((Pass.length < 6) || (Pass == "") || (PassCheck == "")) {
      alert("Ошибка ввода пароля");
      return;
    }
  
    if (Pass != PassCheck) {
      alert("Пароли должны совпадать");
      return;
    }
  
    if (!Agreement){
      alert("Вы должны принять пользовательское соглашение");
      return;
    }
  
    alert("Регистрация успешна");
    });
  });