import { combineReducers } from '@reduxjs/toolkit';

import userReducer from './slices/authSlice';
import sidebarReducer from './slices/sidebarSlice';

const reducer = combineReducers({
    auth: userReducer,
    sidebar: sidebarReducer,
});

export default reducer;
