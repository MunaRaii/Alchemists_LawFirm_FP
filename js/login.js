function submitLoginForm() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
  
    const message = login(email, password);
    
    if(message){
        alert(message);
    }  
  }
  