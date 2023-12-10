
                    // Function to set user information in local storage
                    function setUserInStorage(user) {
                        localStorage.setItem('user', JSON.stringify(user));
                    }
                
                    // Function to get user information from local storage
                    function getUserFromStorage() {
                        const storedUser = localStorage.getItem('user');
                        return storedUser ? JSON.parse(storedUser) : null;
                    }
                
                    // Function to handle login
                    function login() {
                        var email = document.getElementById('email').value;
                        var password = document.getElementById('password').value;
                
                        // Retrieve user information from local storage
                        var user = getUserFromStorage();
                
                        if (user) {
                            // Check if email and password match the stored user
                            if (user.email === email && user.password === password) {
                                // Redirect to the welcome page with the username as a query parameter
                                window.location.href = 'headerfooter.html?name=' + encodeURIComponent(user.name);
                            } else {
                                alert('Invalid email or password');
                            }
                        } else {
                            alert('User not found. Please register first.');
                        }
                    }
                
                    // Function to handle logout
                    function logout() {
                        // Clear user information in local storage
                        localStorage.removeItem('user');
                        // Redirect to the login page after logout
                        window.location.href = 'index.html';
                    }
                
                    // Parse the query parameter to get the username
                    const params = new URLSearchParams(window.location.search);
                    const name = params.get('name');
                
                    // Display the username on the page and toggle login/logout buttons
                    const welcomeNameElement = document.getElementById('welcomeName');
                    const welcomeMessageElement = document.getElementById('welcomeMessage');
                    const bookAppointmentLink = document.getElementById('bookAppointmentLink');
                    if (name) {
                        welcomeNameElement.innerText = name;
                        welcomeNameElement.style.display = 'inline-block';
                        welcomeMessageElement.style.display = 'block';
                        document.getElementById('loginButton').style.display = 'none';
                        document.getElementById('logoutButton').style.display = 'inline-block'
                        bookAppointmentLink.style.display = 'inline-block';
                        appointment_button.style.display ='inline-block';
                        welcomeMessage.style.display = 'inline-block'
                    } else {
                        welcomeNameElement.style.display = 'none';
                        welcomeMessageElement.style.display = 'none';
                        document.getElementById('loginButton').style.display = 'inline-block';
                        document.getElementById('logoutButton').style.display = 'none';
                        bookAppointmentLink.style.display = 'none';
                        appointment_button.style.display ='none';
                        welcomeMessage.style.display = 'none'
                    }
                