import api from "./api";

export const startPayment = async () => {
    return api.get("/payment/start");
};

export const setPayment = async (paymentId, paymentType) => {
    return api.post("/payment", { paymentId, paymentType });
}