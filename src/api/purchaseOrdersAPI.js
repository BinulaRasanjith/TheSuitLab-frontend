import api from "./api";

export const getPurchaseOrders = async () => {
  return api.get("/purchase-order");
};

export const getPurchaseOrder = async (id) => {
  return api.get(`/purchase-order/${id}`);
};

export const calculatePrice = async (data) => {
  return api.post("/purchase-order/get-price", data);
};

export const createPurchaseOrder = async (data) => {
  return api.post("/purchase-order", data);
};
