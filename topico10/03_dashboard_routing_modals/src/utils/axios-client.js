import axios from "axios";

export const BASE_URL =  import.meta.env.VITE_BASE_URL

const axiosClient = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
});

axiosClient.interceptors.request.use((config) => {
    config.headers.Accept = "application/json";
    return config;
});

axiosClient.interceptors.response.use(
    (response) => {return response},
    (error) => {
        console.error('Axios:', error)
        throw error;
    }
);

export default axiosClient;


