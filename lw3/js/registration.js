function registration(event){
    var Email = document.getElementById('email');
    var Pass = document.getElementById('password');
    var PassCheck = document.getElementById('password_repeat');
    var Agreement = document.getElementById('check_agreement');  
    var emailCheck = (/[^\s@]+@[^\s@]+\.[^\s@]+/.test(Email.value));
  
    event.preventDefault();
    if ((Email.value == "") || (Pass.value == "") || (PassCheck.value == "")){
      alert("Введите данные"); 
      return;
      
    }else{

      if ((Email.value.length < 5) || (!emailCheck)) {
          alert("Email введен некорректно");
          return;
      }
  
      if ((Pass.value.length < 6) || (Pass == "") || (PassCheck == "")) {
          alert("Длина пароля должна быть не менее 6-ти символов");
          return;
      }
  
      if (Pass.value != PassCheck.value) {
          alert("Введеные пароли не совпадают");
          return;
      }
  
      if (!Agreement.checked){
          alert("Примите условия пользовательского соглашение");
          return;
      }
  
      alert("Регистрация успешна!");
      }
  }
  
  window.onload = function(){
    document.getElementById("registration").addEventListener("submit", registration);
  };