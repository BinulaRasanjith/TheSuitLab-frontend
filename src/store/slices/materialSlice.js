import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { getMaterials as getMaterialsAPI } from "../../api/materialAPI";
import { FABRIC_PATTERN, FABRIC_SOLID, IDLE, LOADING } from "../../constants";

const initialState = {
    materials: {
        fabric: [],
    },
    status: IDLE,
    error: null,
};

export const setMaterials = createAsyncThunk( // get materials from API and set them in the store (state.materials) based on the payload (type of material) 
    "materials/setMaterials", // action type 
    async (payload) => { // payload is the type of material (fabric, button, lapel, bottom, pocket, sleeve) 
        try { // get materials from API
            let response; // response is the data from the API
            response = await getMaterialsAPI(payload); // get materials from API based on the payload (type of material)
            return { type: payload, data: response.data.materials }; // return the type of material and the data from the API 
        } catch (error) {
            return Promise.reject(error);
        }
    }
);

const materialSlice = createSlice({
    name: "materials",
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(setMaterials.pending, (state) => {
                state.status = LOADING;
            })
            .addCase(setMaterials.fulfilled, (state, action) => {
                state.status = IDLE;
                state.materials[action.payload.type] = action.payload.data;
            })
            .addCase(setMaterials.rejected, (state, action) => {
                state.status = IDLE;
                state.error = action.payload;
            });
    },
});

// materials selector
export const selectFabricSolid = (state) => state.materials.materials[FABRIC_SOLID];
export const selectFabricPattern = (state) => state.materials.materials[FABRIC_PATTERN];

// materials actions
// export const { } = materialSlice.actions;

export default materialSlice.reducer;