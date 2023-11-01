import api from "./api";

// VIEW MATERIALS BASED ON THE TYPE
export const getMaterials2 = async ({ materialType }) => {
    return api.get('/material/', {
        params: {
            materialType,
        }
    });
};

// ADD NEW MATERIAL
export const addMaterial = async (material) => {
    return api.post("/material/add", material, {
        headers: {
            "Content-Type": "multipart/form-data",
        },
    });
};

// REMOVE EXISTING MATERIAL
export const removeMaterial = async (material) => {
    return api.post("/material/remove", material);
};

// STOCK UPDATE FOR MATERIAL
export const addMaterialQuantity = async (updates) => {
    return api.put("/material/", updates);
};

// USE MATERIAL QUANTITY
export const useMaterialQuantity = async (material) => {
    return api.patch("/material/use-quantity", material);
};

export const getMaterials = async (type) => {
    return api.get("/material", {
        params: {
            materialType: type,
        },
    });
};
