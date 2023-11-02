import api from "./api";

export const getCustomersPurchaseOrders = async (customerId) => {
  return api.get(`/purchase-order/customer/${customerId}`);
};

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

// MARK AS COSTUME IS READY TO COLLECT
export const updateToCollected = async (id) => {
  return api.patch("/purchase-order/to-collected", id);
}

export const assignTailor = async (itemId, tailorId) => {
  return api.post("/purchase-order/assign-tailor", { itemId, tailor: tailorId });
}

export const getAssignedTailorForCostume = async (id) => {
  return api.get(`/purchase-order/get-assigned-tailor/${id}`);
}