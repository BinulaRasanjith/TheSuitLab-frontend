import api from "./api";

export const getPurchaseOrders = async () => {

    return api.get("/purchase-order");

}