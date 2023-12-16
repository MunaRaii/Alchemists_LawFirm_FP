function attachServiceEvents() {
    /* Perform the add service function */
    attachAddServiceEvent();

    /* Perform the add to fav service function */
    attachAddToFavServiceEvent();
}


function attachAddServiceEvent() {
    const addToServiceBtns = document.querySelectorAll('.' + className.addToService);

    addToServiceBtns.forEach(btn => {
        btn.addEventListener('click', function (e) {
            e.preventDefault();

            if (!isUserLoggedIn()) {
                redirectToLoginPage();
                return;
            }

            const serviceId = this.getAttribute('data-service-id');
            const userId = getLoginedUserId();

            if (serviceId && userId) {
                addToMyService(userId, serviceId);
                this.classList.add('disabled');
                this.text = BUTTON_TEXT.ADDED_SERVICE;
            }
        })
    })
}


function attachAddToFavServiceEvent(){
    const addToFavServiceBtns = document.querySelectorAll('.' + className.addToFavService)
    addToFavServiceBtns.forEach(btn => {
        btn.addEventListener('click', function (e) {
            e.preventDefault();
            if (!isUserLoggedIn()) {
                redirectToLoginPage();
                return;
            }

            const serviceId = this.getAttribute('data-service-id');
            const userId = getLoginedUserId();

            if (serviceId && userId) {
                addToFavService(userId, serviceId);
                this.classList.add('disabled');
                this.text = BUTTON_TEXT.ADDED_TO_FAV;
            }
        })
    })
}