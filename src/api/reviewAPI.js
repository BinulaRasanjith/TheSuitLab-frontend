import api from "./api";

export const getReviews = () => {
    return api.get('/review');
}

export const createReview = (data) => {
    return api.post('/review', data);
}

export const deleteReview = (id) => {
    return api.delete(`/review/${id}`);
}