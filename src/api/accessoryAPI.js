import api from "./api";

export const addNewAccessory = (data) => {
    return api.post('/accessory/add', data, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    });
}

export const getAccessories = () => {
    return api.get('/accessory/');
}

export const getAccessoryById = (id) => {
    return api.get(`/accessories/${id}`);
};

export const getAccessory = (AccType, AccId) => {
    return api.get(`/accessories/${AccType}/${AccId}`);
};

export const getSpecificAccessories = ({ accessoryType }) => {
    return api.get(`/accessories`, {
        params: {
            accessoryType,
        },
    });
};

export const addAccessoryToCart = async (cartItem) => {
    return api.post("/accessories/add-accessory-to-cart", cartItem);
};
