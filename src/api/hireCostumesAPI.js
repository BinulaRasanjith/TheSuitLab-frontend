import api from './api';

export const getHireCostumes = async ({ costumeType, rentStatus }) => {
    return api.get('/hire-costume', {
        params: {
            costumeType,
            rentStatus
        }
    })
};

export const getHireCostume = async (hireCostumeId) => {
    return api.get(`/hire-costume/${hireCostumeId}`)
}