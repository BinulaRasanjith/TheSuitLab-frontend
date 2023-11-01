import api from './api';

// VIEW MATERIALS BASED ON THE TYPE
export const getMaterials = async ({ materialType }) => {
    return api.get('/material/', { 
        params: {
            materialType,
        } 
    });
}

// ADD NEW MATERIAL
export const addMaterial = async (material) => {
    return api.post('/material/', material, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    });
}

// REMOVE EXISTING MATERIAL
export const removeMaterial = async (material) => {
    return api.delete('/material/', material);
}

// STOCK UPDATE FOR MATERIAL
export const addMaterialQuantity = async (updates) => {
    return api.put('/material/add', updates);
}

// USE MATERIAL QUANTITY
export const useMaterialQuantity = async (updates) => {
    return api.put('/material/use', updates);
}