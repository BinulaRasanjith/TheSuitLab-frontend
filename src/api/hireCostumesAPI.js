import api from './api';

export const getHireCostumes = async ({ costumeType, status }) => {
    return api.get('/hire-costume', {
        params: {
            costumeType,
            status
        }
    })
};

export const getHireCostume = async (hireCostumeId) => {
    return api.get(`/hire-costume/${hireCostumeId}`)
}