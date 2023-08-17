import api from "./api";

export const addReturn = (data) => {
    return api.post('/returns/add-return', data);
}

export const getReturns = () => {
    return api.get('/returns/get-returns');
}