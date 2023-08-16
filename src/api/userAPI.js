import api from "./api";

export const addUser = (data) => {
    //console.log(data);
    return api.post('/user/add-user', data, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    });
}