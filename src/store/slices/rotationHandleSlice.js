// rotationSlice.js
import { createSlice } from "@reduxjs/toolkit";

const rotationSlice = createSlice({
  name: "rotation",
  initialState: {
    rotationAngle: 0,
  },
  reducers: {
    setRotation: (state, action) => {
      state.rotationAngle = action.payload;
    },
    rotateByAngle: (state, action) => {
      state.rotationAngle += action.payload;
    },
    // setCostumeScale: (state, action) => {
    //   state.costumeScale = action.payload;
    // },
  },
});

export const { setRotation, rotateByAngle } = rotationSlice.actions;
export const selectRotation = (state) => state.rotation.rotationAngle;
export default rotationSlice.reducer;
