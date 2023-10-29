// HANDOVER MANAGEMENT API
import api from "./api";

// ADD NEW HANDOVER
export const newHandover = async (data) => {
    return api.post('/handover/', data);
}

// VIEW ALL HANDOVERS
export const getHandovers = async () => {
    return api.get('/handover/');
}

// UPDATE REQUESTED HANDOVER
export const updateHandover = async (new_data) => {
    return api.put('/handover/', new_data);
}

// CANCEL REQUESTED HANDOVER
export const cancelHandover = async (id) => {
    return api.delete(`/handover/${id}`);
}