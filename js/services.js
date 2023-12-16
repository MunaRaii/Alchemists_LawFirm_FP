/** 
 * Add login user in service
 */
function addToMyService( userId, serviceId ){
    if(isStoreExist() && isUserExist( userId)){
        store.users[userId].services.push(serviceId);
        return true;
    }
    return false;
}


function removeService( userId, serviceId ){
    if(isStoreExist() && isUserExist( userId)){
        store.users[userId].services =  store.users[userId].services.filter( storedServiceId => storedServiceId !== serviceId);
        return true;
    }
    return false;
}


function isSubscribedService( userId, serviceId ){
    if(isStoreExist() && isUserExist( userId)){
        return store.users[userId].services.includes(serviceId);
    }
    return false;
}


/** 
 * add fav service in list
 */
function addToFavService( userId, serviceId ){
    if(isStoreExist() && isUserExist( userId)){
        store.users[userId].favServices.push(serviceId);
        return true;
    }
    return false;
}

function removeFav( userId, ServiceId){
    if(isStoreExist() && isUserExist( userId)){
        store.users[userId].favServices =  store.users[userId].favServices.filter( storedServiceId => storedServiceId !== serviceId);
        return true;
    }
    return false;
}


function isFavService( userId, serviceId ){
    if(isStoreExist() && isUserExist( userId)){
        return store.users[userId].favServices.includes(serviceId);
    }
    return false;
}


/** 
 * Provide all service that we have
 */
function getAllServices( ){
    if(isStoreExist()){
        return Object.values(store.services);
    }
}


/**
 *  Provide the services that are associated with given user id
 */
function getServicesByUserId( userId ){
    if(isStoreExist() && isUserExist( userId)){
        const servicesId = getUserServicesId(userId);
        return servicesId.map( id=> store.services[id]);
    }
    return[];
}


/**
 *  Provide the fav services that associate with given user id
 */
function getUserFavServiceById( userId ){
    if(isStoreExist() && isUserExist( userId)){
        const favServicesId = getUserFavServicesId(userId);
        return favServicesId.map( id=> store.services[id]);
    }
    return[];
}