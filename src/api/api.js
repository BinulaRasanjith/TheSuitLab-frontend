import axios from "axios";

import { SERVER_URL } from "../config/config";
import { refreshToken } from "./authAPIs";

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
                const response = await refreshToken();

                const { accessToken } = response.data;
                localStorage.setItem("accessToken", accessToken);
                api.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
                return api.request(originalRequest);
            } catch (_error) {
                return Promise.reject(_error);
            }
        }
        return Promise.reject(error);
    }
);

export default api;
