


function getAddServiceBtn(serviceId = null) {
    const userId = getLoginedUserId();
    if(isSubscribedService(userId, serviceId)){
        return `<a href="#" class="btn btn-secondary ${className.addToService} disabled">${BUTTON_TEXT.ADDED_SERVICE}</a>`;
    }
    return `<a href="#" class="btn btn-secondary ${className.addToService}" data-service-id="${serviceId}">${BUTTON_TEXT.ADD_SERVICE}</a>`;
}


function getAddFavServiceBtn(serviceId = null) {
    const userId = getLoginedUserId();
    if (isFavService(userId, serviceId)) {
        return `<a href="#" class="btn btn-secondary ${className.addToFavService} disabled" ><i class="bi bi-heart-fill"></i>${BUTTON_TEXT.ADDED_TO_FAV}</a>`;
    }
    return `<a href="#" class="btn btn-secondary ${className.addToFavService}" data-service-id="${serviceId}"><i class="bi bi-heart-fill"></i>${BUTTON_TEXT.ADD_TO_FAV}</a>`;
}


function getServiceTemplate(service) {
    return `
    <div class="col-md-4 my-3">
        <div class="card border-0" data-service-id="${service?.id}">
            <div class="img"
                height="200px"
                style="background-image: url(${service?.imgUrl})"
            ></div>
            <div class="card-body p-4">
                <h4 class="card-title">${service?.title}</h4>
                <p class="card-text">${service?.description}</p>
                ${getAddServiceBtn(service?.id)}
                ${getAddFavServiceBtn(service?.id)}
            </div>
        </div>
    </div>
    `;
};


function getServicesTemplate(serviceArr) {
    let template = '<div class="services row">';
    serviceArr.forEach(service => {
        template += getServiceTemplate(service);
    });
    template += '</div>';
    return template;
}