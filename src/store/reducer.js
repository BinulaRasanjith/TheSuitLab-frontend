import { combineReducers } from "@reduxjs/toolkit";

import userReducer from "./slices/authSlice";
import componentHideReducer from "./slices/componentHideSlice";
import costumeCustomizationReducer from "./slices/costumeCustomizationSlice";
import jacketCustomizationReducer from "./slices/jacketCustomizationSlice";
import materialReducer from "./slices/materialSlice";
import rotationReducer from "./slices/rotationHandleSlice";
import sidebarReducer from "./slices/sidebarSlice";

const reducer = combineReducers({
  auth: userReducer,
  sidebar: sidebarReducer,
  materials: materialReducer,
  jacketCustomization: jacketCustomizationReducer,
  costumeCustomization: costumeCustomizationReducer,
  componentHide: componentHideReducer,
  rotation: rotationReducer,
});

export default reducer;
