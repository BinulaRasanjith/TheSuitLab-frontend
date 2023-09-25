import api from "./api";

export const addNewAccessory = (data) => {
    return api.post('/accessories/add-new', data);
}

export const getReturns = () => {
    return api.get('/accessories/get-accessories');
}

export const updateReturn = (new_data) => {
    return api.post('/accessories/update-accessory', new_data);
}

export const removeReturn = (id) => {
    return api.delete(`/accessories/remove-accessory/${id}`);
}