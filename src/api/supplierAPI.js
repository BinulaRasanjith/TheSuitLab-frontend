import api from "./api";

export const addSupplier = (data) => {
    return api.post('/user/add-supplier', data);
}