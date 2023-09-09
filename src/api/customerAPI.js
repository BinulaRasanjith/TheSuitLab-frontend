import api from "./api";

export const addToCart = async (cartItem) => {
    return api.post("/customers/add-to-cart", cartItem);
}