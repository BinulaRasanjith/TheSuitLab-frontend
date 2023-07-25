import { combineReducers } from '@reduxjs/toolkit';

import userReducer from './slices/userSlice';


const reducer = combineReducers({
    user: userReducer,
});

export default reducer;
