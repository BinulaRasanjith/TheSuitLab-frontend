import api from './api'; // import the axios instance from the api.js file.

export const login = (data) => {  // this function will make a POST request to the /auth/login endpoint of the server. It will return a promise that will resolve to the response from the server. 
    return api.post('/auth/login', data); // make a POST request to the /auth/login endpoint of the server. Pass the data as the request body. 
}

export const logout = () => {  // this function will make a POST request to the /auth/logout endpoint of the server. It will return a promise that will resolve to the response from the server.
    return api.post('/auth/logout'); // make a POST request to the /auth/logout endpoint of the server. 
}

export const signup = (data) => { // this function will make a POST request to the /auth/signup endpoint of the server. It will return a promise that will resolve to the response from the server.
    return api.post('/auth/signup', data); // make a POST request to the /auth/signup endpoint of the server. Pass the data as the request body.
}

export const refreshToken = () => { // this function will make a GET request to the /auth/refresh-token endpoint of the server. It will return a promise that will resolve to the response from the server.
    return api.get('/auth/refresh-token'); // make a GET request to the /auth/refresh-token endpoint of the server.
}