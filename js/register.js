// script.js

document.addEventListener("DOMContentLoaded", function () {
    const progressBar = document.getElementById('progress-bar');
    const progressSelector = document.querySelectorAll('.c-progress');
    progressSelector.forEach(element => {

        element.addEventListener('change', function(){
            const changeInputs = []

            progressSelector.forEach( element=>{
                if(element.value){
                    changeInputs.push(element.value);
                }
            })

            const progressPercentage = changeInputs.length * 25;
            progressBar.style.width = progressPercentage+"%";
        })
        
    });
});

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
    const user = {
        name,
        email,
        password
    };

    createNewUser(user);
}
