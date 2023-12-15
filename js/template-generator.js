
function getServiceTemplate( service ){
    return `
        <div class="service" data-service-id="${service?.id}">
            <div class="wrapper">
                <img src="${service?.imgUrl}" alt="${service?.imgAltText}" />
                <h2>${service?.title}</h2>
                <p>${service?.description}</p>
            </div>
            <div class="btn-wrapper">
                <button data-service-id="${service?.id}">Add Service</button>
                <button data-service-id="${service?.id}">Add to fav</button>
            </div>
        </div>
    `
};


function getServicesTemplate( serviceArr ){
    let template = '<div class="services">';
    serviceArr.forEach(service => {
        template += getServiceTemplate(service);
    });
    template += '</div>';
    return template;
}