
document.addEventListener("DOMContentLoaded", function () {
    const { name = '' } = getLoginedUserDetail();

    // Display the username on the page and toggle login/logout buttons
    const welcomeNameElement = document.getElementById('welcomeName');
    const welcomeMessageElement = document.getElementById('welcomeMessage');

    if(welcomeNameElement && welcomeMessageElement){
        if (name) {
            welcomeNameElement.innerText = name;
            welcomeNameElement.style.display = 'inline-block';
            welcomeMessageElement.style.display = 'block';
            document.getElementById('loginButton').style.display = 'none';
            document.getElementById('logoutButton').style.display = 'inline-block'
            welcomeMessage.style.display = 'inline-block'
        } else {
            welcomeNameElement.style.display = 'none';
            welcomeMessageElement.style.display = 'none';
            document.getElementById('loginButton').style.display = 'inline-block';
            document.getElementById('logoutButton').style.display = 'none';
            welcomeMessage.style.display = 'none'
        }
    }
    
})