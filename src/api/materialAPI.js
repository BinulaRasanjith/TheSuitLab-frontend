import api from './api';

export const getMaterials = async (type) => { // get materials from API based on the payload (type of material)
    return api.get('/material', { type });
}

export const addMaterial = async (material) => {
    return api.post('/material/add', material, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    });
}

export const removeMaterial = async (material) => {
    return api.post('/material/remove', material);
}

export const addMaterialQuantity = async (material) => {
    return api.patch('/material/add-quantity', material);
}

export const useMaterialQuantity = async (material) => {
    return api.patch('/material/use-quantity', material);
}