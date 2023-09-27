import api from './api';

export const getHireCostumes = async ({ costumeType, status }) => {
    return api.get('/hiring/hire-costume', {
        params: {
            costumeType,
            status
        }
    })
};

export const getHireCostume = async (hireCostumeId) => {
    return api.get(`/hire-costume/${hireCostumeId}`)
}

export const addHireCostume = async (newCostume) => {
    return api.post("/hiring/add-costume", newCostume);
}