import api from "./api";

export const addNewAccessory = (data) => {
  return api.post("/accessories/add-new", data);
};

export const getAccessoryById = (id) => {
    return api.get(`/accessories/${id}`);
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
