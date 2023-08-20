import { combineReducers } from '@reduxjs/toolkit';

import userReducer from './slices/authSlice';
import jacketCustomizationReducer from './slices/jacketCustomizationSlice';
import sidebarReducer from './slices/sidebarSlice';

const reducer = combineReducers({
    auth: userReducer,
    sidebar: sidebarReducer,
    jacketCustomization: jacketCustomizationReducer,
});

export default reducer;
