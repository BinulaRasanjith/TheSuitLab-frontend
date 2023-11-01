// HIRING MANAGEMENT API
import api from "./api";

// ADD NEW HIRE
export const newHire = async (data) => {
    return api.post('/hiring/', data);
}

// VIEW ALL HIRED COSTUMES
export const getHires = async () => {
    return api.get('/hiring/');
    // return api.get('/hiring/get-hires');
}

// UPDATE REQUESTED HIRE
export const updateHire = async (new_data) => {
    return api.put('/hiring/', new_data);
    // return api.post('/hiring/update-hire', new_data);
}

// CANCEL REQUESTED HIRE
export const cancelHire = async (id) => {
    return api.delete(`/hiring/${id}`);
    // return api.get(`/hiring/remove-hire/${id}`);
}