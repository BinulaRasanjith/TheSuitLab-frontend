import api from "./api";

export const addReturn = (data) => {
    return api.post('/returns/add-return', data);
}