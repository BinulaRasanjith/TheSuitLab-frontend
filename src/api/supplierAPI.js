import api from "./api";

/* 
router.post("/create", createSupplier);
router.get("/get", getSuppliers);
router.get("/get/:id", getSupplier);
router.patch("/update", updateSupplier);
router.delete("/delete/:id", deleteSupplier);
*/

export const addSupplier = (data) => {
    return api.post('/user/add-supplier', data);
}

export const getSuppliers = () => {
    return api.get('/user/get-suppliers');
}

export const getSupplier = (id) => {
    return api.get(`/user/get-supplier/${id}`);
}

export const updateSupplier = (data) => {
    return api.patch('/user/update-supplier', data);
}

export const deleteSupplier = (id) => {
    return api.delete(`/user/delete-supplier/${id}`);
}