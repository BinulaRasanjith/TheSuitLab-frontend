import api from "./api";

export const getPurchaseOrders = async () => {
    return api.get("/purchase-order");
}

export const getPurchaseOrder = async (id) => {
    return api.get(`/purchase-order/${id}`);
}

// MARK AS COSTUME IS READY TO COLLECT
export const updateToCollected = async (id) => {
    return api.patch("/purchase-order/to-collected", id);
}