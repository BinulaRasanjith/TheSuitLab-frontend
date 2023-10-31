import api from "./api";

export const getReviews = () => {
    return api.get('/review');
}

export const createReview = (customerId, orderId, itemId, rating, description) => {
    return api.post('/review', { customerId, orderId, itemId, rating, description });
}

export const deleteReview = (id) => {
    return api.delete(`/review/${id}`);
}