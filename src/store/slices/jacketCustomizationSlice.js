import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    jacket: {
        fabric: "grey",
        button: null,
        lapel: null,
        bottom: null,
        pocket: null,
        sleeve: null,
    },
    status: "idle",
    error: null,
};

const jacketCustomizationSlice = createSlice({
    name: "jacketCustomization",
    initialState,
    reducers: {
        setJacket: (state, action) => {  // this reducer will be used to set the jacket property of the state to the value passed to it.
            for (const [key, value] of Object.entries(action.payload)) { // loop through the object passed to the reducer
                state.jacket[key] = value;  // set the jacket property of the state to the value passed to it.
            }
        },
    }
});

// jacket selector
export const selectJacket = (state) => state.jacketCustomization.jacket;

// jacketCustomization actions
export const { setJacket } = jacketCustomizationSlice.actions;

export default jacketCustomizationSlice.reducer;