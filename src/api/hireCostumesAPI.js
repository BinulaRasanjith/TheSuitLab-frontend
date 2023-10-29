// HIRING COSTUME MANAGEMENT API
import api from './api';

// TO VIEW HIRE COSTUMES WITH FILTERS
export const getHireCostumes = async ({ costumeType, rentStatus }) => {
    return api.get(`/costume-hiring`, {
        params: {
            costumeType,
            rentStatus
        }
    })
};

// TO VIEW SELECTED HIRE COSTUME
export const getHireCostume = async (CostumeId) => {
    return api.get(`/costume-hiring/${CostumeId}`)
}

// TO ADD NEW HIRE COSTUME
export const addHireCostume = async (data) => {
    return api.post(`/costume-hiring/`, data);
}

// TO UPDATE EXSISTING HIRE COSTUME
export const updateHireCostume = async (changes) => {
    return api.put(`/ccostume-hiring/`, changes);
}

// TO REMOVE EXISTING HIRE COSTUME
export const removeHireCostume = (CostumeId) => {
    return api.delete(`/costume-hiring/${CostumeId}`);
}