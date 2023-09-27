import api from "./api";

export const addToCart = async (cartItem) => {
    return api.post("/customer/add-to-cart", cartItem);
}

export const addCustomSuitToCart = async (cartItem) => {
    return api.post("/customer/add-custom-suit-to-cart", cartItem);
}

export const addNewCostumeToItemModel = async ({ itemType, price, quantity, status }) => {
    return api.post("/customer/add-new-costume-to-item-model", { itemType, price, quantity, status });
}

// export const removeFromCart = async (cartItem) => { }

export const getCart = async () => {
    return api.get("/customer/cart");
}

export const removeCartItem = async (id) => {
    return api.delete("/customer/remove-cart-item/"+id);
}

export const setTrouserMeasurements = async (measurements) => {
    return api.post("/customer/set-trouser-measurements", { measurements });
}

export const setCoatMeasurements = async (measurements) => {
    return api.post("/customer/set-coat-measurements", { measurements });
}

export const getTrouserMeasurements = async (userId) => {
    return api.get("/customer/trouser-measurements/" + userId);
}

export const getCoatMeasurements = async (userId) => {
    return api.get("/customer/coat-measurements/" + userId);
}
