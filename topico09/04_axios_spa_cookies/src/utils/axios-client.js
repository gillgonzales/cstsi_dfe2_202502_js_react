import axios from "axios";

export const BASE_URL =  import.meta.env.VITE_API_URL
console.log({BASE_URL});

const axiosClient = axios.create({
    baseURL: BASE_URL,
});

axiosClient.defaults.withCredentials = true
axiosClient.defaults.withXSRFToken = true;
axiosClient.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

axiosClient.interceptors.request.use((config) => {
    config.headers.Accept = "application/json";
    config.headers["Access-Control-Allow-Credentials"] = true;
    return config;
});

axiosClient.interceptors.response.use(
    (response) => {return response},
    (error) => {
        console.error('Axios:', error)
        throw error;
    }
);


export {axiosClient};


