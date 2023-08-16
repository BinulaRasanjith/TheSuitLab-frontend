import api from "./api";

export const addReturn = (data) => {
    return api.post('/add-return', data);
}