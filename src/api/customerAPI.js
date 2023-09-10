import api from "./api";

export const addToCart = async (cartItem) => {
    return api.post("/customer/add-to-cart", cartItem);
}

export const getCart = async () => {
    return api.get("/customer/cart");
}