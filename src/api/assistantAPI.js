// ASSISTANT DASHBOARD MANAGEMENT API
import api from "./api";

export const cpoc = () => {
    return api.get('/odb/cpoc/');
}

export const clmc = () => {
    return api.get('/odb/clmc/');
}

export const coc = () => {
    return api.get('/odb/coc/');
}

export const cit = () => {
    return api.get('/odb/cit/');
}

export const gro = () => {
    return api.get('/odb/gro/');
}

export const gwp = () => {
    return api.get('/odb/gwp/');
}

// GET DASHBOARD DATA FOR ASSISTANT IN SINGLE REQUEST
export const dashboard = () => {
    return api.get('/dashboard/');
}

// ADD NEW CUSTOMER BY ASSISTANT
export const addNewCustomer = () => {
    return api.post('/user/add-customer/');
}