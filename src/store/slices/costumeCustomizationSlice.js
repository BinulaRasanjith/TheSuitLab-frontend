import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  costume: {
    fabric: "MAT0000000001",
    button: "1S",
    lapel: "peak-lapel",
    pocket: null,
    sleeveButtons: null,
    pocketColor: null,
    buttonColor: "none",
    trouser: null,
    backPocket: null,
  },
  status: "idle",
  error: null,
};

const costumeCustomizationSlice = createSlice({
  name: "costumeCustomization",
  initialState,
  reducers: {
    setCostume: (state, action) => {
      // this reducer will be used to set the jacket property of the state to the value passed to it.
      for (const [key, value] of Object.entries(action.payload)) {
        // loop through the object passed to the reducer
        state.costume[key] = value; // set the jacket property of the state to the value passed to it.
      }
    },
  },
});

// costume selector
export const selectJacket = (state) => state.costumeCustomization.costume;

// costumeCustomization actions
export const { setCostume } = costumeCustomizationSlice.actions;

export default costumeCustomizationSlice.reducer;
