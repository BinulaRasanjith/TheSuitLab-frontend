// HIRING COSTUME MANAGEMENT API
import api from './api';

// TO VIEW HIRE COSTUMES WITH FILTERS
export const getHireCostumes = async ({ costumeType, rentStatus }) => {
    return api.get(`/costumes-for-hire`, {
        params: {
            costumeType,
            rentStatus
        }
    })
};

// TO VIEW SELECTED HIRE COSTUME
export const getHireCostume = async (CostumeId) => {
    return api.get(`/costumes-for-hire/${CostumeId}`)
}

// TO ADD NEW HIRE COSTUME
export const addHireCostume = async (data) => {
    return api.post(`/costumes-for-hire/`, data);
}

// TO UPDATE EXSISTING HIRE COSTUME
export const updateHireCostume = async (changes) => {
    return api.put(`/costumes-for-hire/`, changes);
}

// TO REMOVE EXISTING HIRE COSTUME
export const removeHireCostume = (CostumeId) => {
    return api.delete(`/costumes-for-hire/${CostumeId}`);
}