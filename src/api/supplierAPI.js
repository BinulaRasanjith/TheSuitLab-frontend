import api from "./api";

/* 
router.post("/create", createSupplier);
router.get("/get", getSuppliers);
router.get("/get/:id", getSupplier);
router.patch("/update", updateSupplier);
router.delete("/delete/:id", deleteSupplier);
*/

export const getSuppliers = () => {
    return api.get('/supplier');
}

export const getSupplier = (id) => {
    return api.get(`/supplier/${id}`);
}

export const addSupplier = (data) => {
    return api.post('/supplier', data);
}

export const updateSupplier = (data) => {
    return api.patch('/supplier', data);
}

export const deleteSupplier = (id) => {
    return api.delete(`/supplier/${id}`);
}