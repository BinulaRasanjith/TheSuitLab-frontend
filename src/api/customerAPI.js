import api from "./api";

export const getCustomers = (customerData) => {
    return api.get('/customer/details', customerData);
}

export const addToCart = async (cartItem) => {
    return api.post("/customer/add-to-cart", cartItem);
}

export const addCustomSuitToCart = async (cartItem) => {
    return api.post("/customer/add-custom-suit-to-cart", cartItem);
}

// export const removeFromCart = async (cartItem) => { }

export const getCart = async () => {
    return api.get("/customer/cart");
}

export const setTrouserMeasurements = async (measurements) => {
    return api.post("/customer/set-trouser-measurements", { measurements });
}

export const setCoatMeasurements = async (measurements) => {
    return api.post("/customer/set-coat-measurements", { measurements });
}