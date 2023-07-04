import axios from "axios";
import { SERVER_URL } from "./config";

const API_URL = `${SERVER_URL}/api`;

const api = axios.create({
    baseURL: API_URL,
    headers: {
        "Content-Type": "application/json",
    },
    withCredentials: true,
});

api.interceptors.response.use(
    (response) => response,
    async (error) => {
        const originalRequest = error.config;
        if (error.response.status === 401 && error.response.data.accessTokenExpired === true && !originalRequest._retry) {
            originalRequest._retry = true;
            try {
                await api.get("/auth/refresh-token");
                return api.request(originalRequest);
            } catch (_error) {
                return Promise.reject(_error);
            }
        }
        return Promise.reject(error);
    }
);

export default api;
