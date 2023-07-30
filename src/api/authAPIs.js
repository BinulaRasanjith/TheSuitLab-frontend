import api from './api';

export const login = (data) => {
    return api.post('/auth/login', data);
}

export const logout = () => {
    return api.post('/auth/logout');
}

export const signup = (data) => {
    return api.post('/auth/signup', data);
}

export const refreshToken = () => {
    return api.get('/auth/refresh-token');
}