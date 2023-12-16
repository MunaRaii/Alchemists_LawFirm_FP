const LocalStorageKey= 'globalStore';

function updateStoreInLocalStorage(){
    localStorage.setItem(LocalStorageKey, store);
}

function restoreFromLocalStorage(){
    const store = localStorage.setItem(LocalStorageKey, store);
    if(isStoreExist){
        window.store = store;
    }
};

//Restore data from local storage
// restoreFromLocalStorage();
