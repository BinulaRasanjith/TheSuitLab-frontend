// RETURN MANAGEMENT API
import api from "./api";

// ADD NEW RETURN INQUIRY
export const addReturn = (data) => {
    return api.post('/returns/', data);
}

// VIEW ALL RETURN INQUIRIES
export const getReturns = () => {
    return api.get('/returns/');
}

// UPDATE EXISTING RETURN INQUIRY
export const updateReturn = (updates) => {
    return api.put('/returns/', updates);
}

// REMOVE EXISTING RETURN INQUIRY
export const removeReturn = (id) => {
    return api.delete(`/returns/${id}`);
}