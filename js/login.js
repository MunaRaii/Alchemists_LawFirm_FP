function submitLoginForm() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
  
    // Retrieve user information from local storage
    var storedUser = localStorage.getItem('user');
  
    if (storedUser) {
        var user = JSON.parse(storedUser);
  
        // Check if email and password match the stored user
        if (user.email === email && user.password === password) {
            // Redirect to the welcome page with the username as a query parameter
            window.location.href = 'index.html?name=' + encodeURIComponent(user.name);
        } else {
            alert('Invalid email or password');
        }
    } else {
        alert('User not found. Please register first.');
    }
  }
  