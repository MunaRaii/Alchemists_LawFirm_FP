/** 
 * Global store available in all over the site
 */
let store;

let defaultStore = {
    services: {
        "uszsmadofre": {
            id: "uszsmadofre",
            imgUrl: "https://images.unsplash.com/photo-1482235225574-c37692835cf3?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            imgAltText: "image alt text",
            title: "family violence case",
            description: "Holistic family violence support: counseling, legal aid, and community resources. Empowering families for resilience and creating violence-free environments."
        },
        "gb2p0l5fx": {
            id: "gb2p0l5fx",
            imgUrl: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            imgAltText: "image alt text",
            title: "public company case",
            description: "Strategic solutions for public companies: governance, compliance, and growth strategies. Elevate your business with tailored services for sustained success."
        },
        "j8su5cfazo": {
            id: "j8su5cfazo",
            imgUrl: "https://images.unsplash.com/photo-1556745753-b2904692b3cd?q=80&w=2873&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            imgAltText: "image alt text",
            title: "Business Tax Consultancy",
            description: "Expert business tax consultancy: optimize returns, navigate regulations, and strategize for financial growth. Your partner in fiscal efficiency and success."
        },
        "cr9admku33s": {
            id: "cr9admku33s",
            imgUrl: "https://images.unsplash.com/photo-1522230895200-b681389386d0?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            imgAltText: "image alt text",
            title: "Marriage Agreement",
            description: "Tailored Marriage Agreements: Expertly crafted legal documents ensuring clarity and protection, fostering a strong foundation for a lasting union."
        },
        "lz2s4gupbt": {
            id: "lz2s4gupbt",
            imgUrl: "https://images.unsplash.com/photo-1522230895200-b681389386d0?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            imgAltText: "image alt text",
            title: "New service",
            description: "Tailored Marriage Agreements: Expertly crafted legal documents ensuring clarity and protection, fostering a strong foundation for a lasting union."
        },
    },
    users: {
        "7z0r5o1t9dr": {
            id: "7z0r5o1t9dr",
            email: "munarai@gmail.com",
            password: "munarai",
            services: ["uszsmadofre"],
            favServices: ["gb2p0l5fx"],
        }
    },
    activeUserId: "7z0r5o1t9dr"
};

// let BASE_URL= location.host+'/';
let BASE_URL= 'https://automatic-spoon-7v947qjq6wjv2p6pj-5501.app.github.dev/';

let SITE_PAGES = {
    LOGIN: BASE_URL+'login.html',
    SIGNUP: BASE_URL+'signup.html',
    FAV: BASE_URL+'favrite.html',
    HOME: BASE_URL+'index.html',
    SERVICES: BASE_URL+'services.html',
    MY_SERVICES: BASE_URL+'my-services.html',
};

let BUTTON_TEXT = {
    ADD_SERVICE: 'Add Service',
    ADDED_SERVICE: 'Added Service',
    ADD_TO_FAV : 'Add to Fav',
    ADDED_TO_FAV: 'Added to Fav'
}

const className = {
    addToService: 'add-to-service',
    addToFavService: 'add-to-fav-service'
}



