let localStorageKey= 'globalStore';

function updateStoreInLocalStorage(){
    const {services, ...rest} = store;
    localStorage.setItem(localStorageKey, JSON.stringify(rest));
}

function restoreFromLocalStorage(){
    const previousStateStore = JSON.parse(localStorage.getItem(localStorageKey));
    const {services} = defaultStore;
    if(previousStateStore){
        store = {...previousStateStore, services};
    }else{
        store = defaultStore;
    }
};

//Restore data from local storage
restoreFromLocalStorage();
