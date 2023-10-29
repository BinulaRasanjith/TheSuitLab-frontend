import crypto from "crypto-js";

export const createHash = (order_id, amount, currency, merchant_id) => {
    const merchant_secret = import.meta.env.VITE_MERCHANT_SECRET;
    const hashed_secret = crypto.MD5(merchant_secret).toString().toUpperCase();

    let amountFormatted = parseFloat(amount)
        .toLocaleString("en-us", { minimumFractionDigits: 2 })
        .replaceAll(",", "");

    let hash = crypto
        .MD5(merchant_id + order_id + amountFormatted + currency + hashed_secret)
        .toString()
        .toUpperCase();
    return hash;
};