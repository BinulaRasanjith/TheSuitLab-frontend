import api from "./api";

export const addReturn = (data) => {
    return api.post('/returns/add-return', data);
}

export const getReturns = () => {
    return api.get('/returns/get-returns');
}

export const updateReturn = (new_data) => {
    return api.post('/returns/update-return', new_data);
}

export const removeReturn = (id) => {
    return api.delete(`/returns/remove-return/${id}`);
}