import api from "./api";

export const addNewAccessory = (data) => {
    return api.post('/accessory/add', data, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    });
}

// VIEW MATERIALS BASED ON THE TYPE
// export const getAccessories = async (type) => {
//     return api.get('/accessory/', { type });
// }

export const getAccessory = async (id) => {
    return api.get(`/accessory/${id}`);
}

export const getAccessories = () => {
    return api.get('/accessory/');
}

export const getReturns = () => {
  return api.get("/accessories/get-accessories");
};

export const updateReturn = (new_data) => {
  return api.post("/accessories/update-accessory", new_data);
};

export const removeReturn = (id) => {
  return api.delete(`/accessories/remove-accessory/${id}`);
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
