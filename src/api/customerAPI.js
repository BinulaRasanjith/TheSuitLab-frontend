import api from "./api";

export const addToCart = async (cartItem) => {
    return api.post("/customer/add-to-cart", cartItem);
}

export const getCart = async () => {
    return api.get("/customer/cart");
}

export const setTrouserMeasurements = async (measurements) => {
    return api.post("/customer/set-trouser-measurements", { measurements });
}

export const setCoatMeasurements = async (measurements) => {
    return api.post("/customer/set-coat-measurements", { measurements });
}