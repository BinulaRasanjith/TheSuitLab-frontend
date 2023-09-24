import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  Trouser: true,
  Jacket: true,
  OnlyJacketInitialPosition: -5.2,
  OnlyTrouserInitialPosition: -1.4,
  BothInitialPosition: -2.7,
};

const componentHideSlice = createSlice({
  name: "componentHide",
  initialState,
  reducers: {
    setTrouserHide: (state, action) => {
      state.Trouser = action.payload;
    },
    setJacketHide: (state, action) => {
      state.Jacket = action.payload;
    },
    setOnlyJacketInitialPosition: (state, action) => {
      state.OnlyJacketInitialPosition = action.payload;
    },
    setOnlyTrouserInitialPosition: (state, action) => {
      state.OnlyTrouserInitialPosition = action.payload;
    },
    setBothInitialPosition: (state, action) => {
      state.BothInitialPosition = action.payload;
    },
  },
});

// componentHide selector
export const selectComponentHide = (state) => state.componentHide;

// componentHide actions
export const {
  setTrouserHide,
  setJacketHide,
  setOnlyJacketInitialPosition,
  setOnlyTrouserInitialPosition,
  setBothInitialPosition,
} = componentHideSlice.actions;

export default componentHideSlice.reducer;
