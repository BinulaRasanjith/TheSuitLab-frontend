import axios from "axios";  // import axios to make requests to the server

import { refreshToken } from "./authAPIs";   // import the refresh token function from the authAPIs file

const SERVER_URL = `${import.meta.env.VITE_SERVER_URL || "http://localhost:3333"}`;

const API_URL = `${SERVER_URL}/api`;  // the base url of the API

const api = axios.create({  // create an axios instance
    baseURL: API_URL,  // url = base url + request url
    headers: {   // headers are custom headers to be sent
        "Content-Type": "application/json",   // content type of the request
    },
    withCredentials: true,  // send cookies when cross-domain requests. This is important for authentication.
});

api.interceptors.response.use( // this interceptor will be called every time a response is received from the server. We can use it to refresh the access token if it has expired.
    (response) => response,  // if the response is successful, we just return the response. This will be passed to the next interceptor in the chain.
    async (error) => {  // if the response is not successful, we try to refresh the access token. If the refresh token has expired, we reject the promise with the error. If the refresh token has not expired, we retry the original request. 
        const originalRequest = error.config; // get the original request that was sent to the server
        if (error.response.status === 401 && error.response.data.accessTokenExpired === true && !originalRequest._retry) { // if the access token has expired and the original request has not been retried yet
            originalRequest._retry = true; // mark the original request as retried
            try {
                const response = await refreshToken(); // try to refresh the access token

                const { accessToken } = response.data; // get the new access token from the response
                localStorage.setItem("accessToken", accessToken); // set the new access token in the local storage
                api.defaults.headers.common.Authorization = `Bearer ${accessToken}`; // set the new access token in the axios instance
                return api.request(originalRequest);  // retry the original request
            } catch (_error) {  // if the refresh token has expired
                return Promise.reject(_error); // reject the promise with the error
            }
        }
        return Promise.reject(error);  // if the error is not related to the access token, reject the promise with the error
    }
);

export default api; // export the axios instance
