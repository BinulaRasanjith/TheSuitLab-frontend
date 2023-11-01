import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  fabric: "MAT0000000000",
  button: "1S",
  lapel: "peak-lapel",
  pocket: null,
  sleeveButtons: null,
  pocketColor: null,
  buttonColor: "none",
  trouser: "no-vent",
  backPocket: null,
};

const jacketCustomizationSlice = createSlice({
  name: "jacketCustomization",
  initialState,
  reducers: {
    setJacket: (state, action) => {
      // this reducer will be used to set the jacket property of the state to the value passed to it.
      for (const [key, value] of Object.entries(action.payload)) {
        // loop through the object passed to the reducer
        state[key] = value; // set the jacket property of the state to the value passed to it.
      }
    },
  },
});

// jacket selector
export const selectJacket = (state) => state.jacketCustomization;

// jacketCustomization actions
export const { setJacket } = jacketCustomizationSlice.actions;

export default jacketCustomizationSlice.reducer;
