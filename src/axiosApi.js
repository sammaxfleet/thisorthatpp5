import axios from "axios"

export const axiosInstance = axios.create({
    baseURL: "https://thisorthatapi-56bb400a2b0e.herokuapp.com/",
    timeout: 5000,
    headers: {
        "Content-Type": "application/json",
        accept: "application/json"
    }
})

export const axiosInstanceFormData = axios.create({
    baseURL: "https://thisorthatapi-56bb400a2b0e.herokuapp.com/",
    timeout: 5000,
    headers: {
        "Content-Type": "multipart/form-data;"
    }
});

// Add a request interceptor
axiosInstanceFormData.interceptors.request.use(
    function (config) {
        // Get the latest access token from localStorage
        const accessToken = localStorage.getItem("access");

        // If access token exists, set it in the Authorization header
        if (accessToken) {
            config.headers['Authorization'] = `Bearer ${accessToken}`;
        } else {
            // If access token doesn't exist, remove the Authorization header
            delete config.headers['Authorization'];
        }

        return config;
    },
    function (error) {
        return Promise.reject(error);
    }
);


axiosInstance.interceptors.request.use(
    function (config) {
        // Get the latest access token from localStorage
        const accessToken = localStorage.getItem("access");

        // If access token exists, set it in the Authorization header
        if (accessToken) {
            config.headers['Authorization'] = `Bearer ${accessToken}`;
        } else {
            // If access token doesn't exist, remove the Authorization header
            delete config.headers['Authorization'];
        }

        return config;
    },
    function (error) {
        return Promise.reject(error);
    }
);

