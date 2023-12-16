// script.js
function submitForm() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;

    // Simple validation
    if (!name || !email || !password || !confirmPassword) {
        alert('All fields are required');
        window.scrollTo(0, 0); // Scroll to top after alert
        return;
    }

    if (password !== confirmPassword) {
        alert('Passwords do not match');
        window.scrollTo(0, 0); // Scroll to top after alert
        return;
    }

    // Validate email format (basic validation)
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Invalid email format');
        window.scrollTo(0, 0); // Scroll to top after alert
        return;
    }

         // Validate password strength (example: at least 6 characters)
    else if (password.length < 6) {
        alert('Password should be at least 6 characters');
        window.scrollTo(0, 0); // Scroll to top after alert
        return;
    }

    

   
    // Store user information in local storage (not secure for production)
    var user = {
        name: name,
        email: email,
        password: password
    };

    localStorage.setItem('user', JSON.stringify(user));

    alert('Registered successfully!');

    // Redirect to login page or perform other actions
    window.location.href = 'headerfooter.html';
}
