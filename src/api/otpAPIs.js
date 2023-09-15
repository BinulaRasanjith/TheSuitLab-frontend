import api from "./api";

export const sendOTP = async (mobileNo) => {
    return api.post("/otp/send", { mobileNo });
};

export const verifyOTP = async (mobileNo, otp) => {
    return api.post("/otp/verify", { mobileNo, otp });
};
