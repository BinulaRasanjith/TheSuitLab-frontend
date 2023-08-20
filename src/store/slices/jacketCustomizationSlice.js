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
        setJacket: (state, action) => {
            for (const [key, value] of Object.entries(action.payload)) {
                state.jacket[key] = value;
            }
        },
    }
});

// jacket selector
export const selectJacket = (state) => state.jacketCustomization.jacket;

// jacketCustomization actions
export const { setJacket } = jacketCustomizationSlice.actions;

export default jacketCustomizationSlice.reducer;