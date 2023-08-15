import api from "./api";

export const addUser = (data) => {
    return api.post('/user/add-user', data);
}