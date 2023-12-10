function submitForm() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;

    // Simple validation
    if (!name || !email || !password || !confirmPassword) {
        alert('All fields are required');
        return;
    }

    if (password !== confirmPassword) {
        alert('Passwords do not match');
        return;
    }

    // Validate email format (basic validation)
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Invalid email format');
        return;
    }

         // Validate password strength (example: at least 6 characters)
    else if (password.length < 6) {
        alert('Password should be at least 6 characters');
        return;
    }

    

   
    // Store user information in local storage
    var user = {
        name: name,
        email: email,
        password: password
    };

    


    localStorage.setItem('user', JSON.stringify(user));

    alert('Registered successfully!');

    // Redirect to login page or perform other actions
    window.location.href = 'index.html';
}