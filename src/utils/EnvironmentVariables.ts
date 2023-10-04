export const EnvironmentVariables = {
    URLs: {
        MainAPIURL: "http://localhost:5500", // you can always modify this
        APIUrl: "https://zm6zxgq6hyhe3smi5krzsrk2fu0iidhh.lambda-url.us-east-1.on.aws", // not so in this project, but this should be like the main backend url - i.e https://blahblah.com/api
    },
    EndPoints: {
        Brands: {
            GetBrand: "/Brands/GetBrand",
            GetBrands: "/Brands/GetBrands",
        }
    } // if there's backend service connected to this  - all the required endpoints will sit here for easy referencing

    // ofcourse you could add any other thing necessary here
}

