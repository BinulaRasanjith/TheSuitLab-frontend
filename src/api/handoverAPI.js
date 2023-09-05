import api from "./api";

export const newHire = (data) => {
    return api.post('/hiring/new-hire', data);
}

export const getHires = () => {
    return api.get('/hiring/get-hires');
}

export const updateHire = (new_data) => {
    return api.post('/hiring/update-hires', new_data);
}

export const cancelHire = (id) => {
    return api.get(`/hiring/remove-hire/${id}`);
}