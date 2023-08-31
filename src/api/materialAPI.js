import api from './api';

export const getMaterials = async (type) => { // get materials from API based on the payload (type of material)
    return api.post('/materials', { type });
}

export const addMaterial = async (material) => {
    return api.post('/materials/add', material, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    });
}

export const removeMaterial = async (material) => {
    return api.post('/materials/remove', material);
}

export const addMaterialQuantity = async (material) => {
    return api.patch('/materials/add-quantity', material);
}

export const useMaterialQuantity = async (material) => {
    return api.patch('/materials/use-quantity', material);
}