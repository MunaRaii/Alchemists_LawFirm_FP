

document.addEventListener("DOMContentLoaded", function() {

    /* Home page service */
    const homePageServiceSection = document.getElementById('home-service');
    if(homePageServiceSection){
        const getServices = getAllServices();
        const serviceTemplate = getServicesTemplate(getServices);
        homePageServiceSection.innerHTML = serviceTemplate;


        /* Perform the add service function */
        const addToServiceBtns = document.querySelectorAll('.'+className.addToService)
        addToServiceBtns.forEach( btn =>{
            btn.addEventListener('click', function(e){
                e.preventDefault();
                const serviceId = this.getAttribute('data-service-id');
                const userId = getLoginUserId();
    
                if(serviceId && userId){
                    addToMyService(userId, serviceId);
                    this.classList.add('disabled');
                    this.text = BUTTON_TEXT.ADDED_SERVICE;
                }
                
            })
        })


        /* Perform the add to fav service function */
        const addToFavServiceBtns = document.querySelectorAll('.'+className.addToFavService)
        addToFavServiceBtns.forEach( btn =>{
            btn.addEventListener('click', function(e){
                e.preventDefault();
                const serviceId = this.getAttribute('data-service-id');
                const userId = getLoginUserId();
    
                if(serviceId && userId){
                    addToFavService(userId, serviceId);
                    this.classList.add('disabled');
                    this.text = BUTTON_TEXT.ADDED_TO_FAV;
                }
                
            })
        })
        
    }




   

});