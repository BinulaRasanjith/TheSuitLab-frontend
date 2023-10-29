import api from "./api";

export const addNewAccessory = (data) => {
    return api.post('/accessory/add-new', data);
}

export const getAccessory = async (id) => {
    return api.get(`/accessory/${id}`);
}

export const getAccessories = () => {
    return api.get('/accessory/');
}

export const updateReturn = (new_data) => {
    return api.post('/accessories/update-accessory', new_data);
}

export const removeReturn = (id) => {
    return api.delete(`/accessories/remove-accessory/${id}`);
}