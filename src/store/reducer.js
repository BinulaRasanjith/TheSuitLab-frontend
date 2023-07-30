import { combineReducers } from '@reduxjs/toolkit';

import userReducer from './slices/authSlice';


const reducer = combineReducers({
    auth: userReducer,
});

export default reducer;
