// ASSISTANT DASHBOARD MANAGEMENT API
import api from "./api";


// GET DASHBOARD DATA FOR ASSISTANT IN SINGLE REQUEST // ! NOW WORKING
export const dashboardData = () => {
    return api.get('/assistant/');
}

// ADD NEW CUSTOMER BY ASSISTANT
export const addNewCustomer = (data) => {
    return api.post('/user/add-customer/', data);
}