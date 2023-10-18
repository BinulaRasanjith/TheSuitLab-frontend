import api from "./api";

// ADD NEW HIRE
export const newHire = (data) => {
    return api.post('/hiring/', data);
}

// VIEW ALL HIRES
export const getHires = () => {
    return api.get('/hiring/');
    // return api.get('/hiring/get-hires');
}

// UPDATE REQUESTED HIRE
export const updateHire = (new_data) => {
    return api.put('/hiring/', new_data);
    // return api.post('/hiring/update-hire', new_data);
}

// CANCEL REQUESTED HIRE
export const cancelHire = (id) => {
    return api.delete(`/hiring/${id}`);
    // return api.get(`/hiring/remove-hire/${id}`);
}
