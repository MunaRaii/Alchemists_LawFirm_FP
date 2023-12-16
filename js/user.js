
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

/** 
 * Validate the user information for crate new user in system
 */
function validateSignupDetails(){

}

/** 
 * Create new user
 * user object should have name, email and password to create password
 * eg
 * {
 *  name: 'muna',
 *  password: 'munarai,
 *  email: 'munarai@gmail.com'
 * }
 */
function createNewUser( userDetail ){
    const {name ='', email='', password=''} = userDetail; 
    if( name && email && password ){
        const id = generateID();
        const user = {
            id,
            name,
            email,
            password,
            services: [],
            favServices: []
        }

        store.users[id] = user;
        redirectToLoginPage();
    }
    return false;
}


/* Validate user details for login */
function authenticateUser( email, password ){
    if(isUserExist(email, password)){
        redirectToServicePage();
        return;
    }
    return 'Invalid user name and password';
}

/* Check the provided user detail exist in system */
function isUserExist( email, password ){
    const allExistingUsers = getAllUsers();
    return allExistingUsers.some( user => user.email === email && user.password === password);
}

function getAllUsers(){
    return Object.values(store.users);
}
function getUserServicesId( userId ){
    if(isStoreExist() && isUserExist( userId)){
        return store.users[userId].services;
    }
    return [];
}


function getUserFavServicesId( userId ){
    if(isStoreExist() && isUserExist( userId)){
        return store.users[userId].favServices;
    }
    return [];
}

