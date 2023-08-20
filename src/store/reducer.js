import { combineReducers } from '@reduxjs/toolkit';

import userReducer from './slices/authSlice';
import jacketCustomizationReducer from './slices/jacketCustomizationSlice';
import materialReducer from './slices/materialSlice';
import sidebarReducer from './slices/sidebarSlice';

const reducer = combineReducers({
    auth: userReducer,
    sidebar: sidebarReducer,
    materials: materialReducer,
    jacketCustomization: jacketCustomizationReducer,
});

export default reducer;
