
/** 
 * Create new user
 * user object should have name, email and password are required to create new account
 * eg
 * {
 *  name: 'muna',
 *  password: 'munarai,
 *  email: 'munarai@gmail.com'
 * }
 */
function createNewUser( userDetail ){
    const {name ='', email='', password=''} = userDetail;  //This
    if( name && email && password ){ //This
        const id = generateID();
        const user = {
            ...userDetail,
            id,
            services: [],
            favServices: []
        }

        store.users[id] = user;
        updateStoreInLocalStorage();
        redirectToLoginPage();
    }//This Lines can we remove aftter merge the login and signup page
    return false;
}


/* Validate user details for login */
function login( email, password ){
    if(validateUserDetail(email, password)){
        store.activeUserId 
        redirectToMyServicePage();
        return;
    }
    return 'Invalid user name and password';
}


function logout(){
    store.activeUserId = null;
    updateStoreInLocalStorage();
    redirectToLoginPage();
}


function isUserExist(userId){
    return store.users.hasOwnProperty(userId);
}

/** 
 * Check any user is login or not
 */
function isUserLoggedIn(){
    return !!store?.activeUserId;
}


/** 
 * Provide the currently login user id
 */
function getLoginedUserId(){
    if(isUserLoggedIn()){
        return store.activeUserId;
    }
    return '';
};


/* Check the provided user detail exist in system */
function validateUserDetail( email, password ){
    const allExistingUsers = getAllUsers();
    return allExistingUsers.some( user => {
        if(user.email === email && user.password === password){
            store.activeUserId = user.id;
            updateStoreInLocalStorage();
            return true;
        }
    });
}

/* Provide all users info list */
function getAllUsers(){
    return Object.values(store.users);
}

/* Provide users services id by user id */
function getUserServicesId( userId ){
    if(isStoreExist() && isUserExist( userId)){
        return store.users[userId].services;
    }
    return [];
}

/* Provide the all fav services id by user id */
function getUserFavServicesId( userId ){
    if(isStoreExist() && isUserExist( userId)){
        return store.users[userId].favServices;
    }
    return [];
}

