import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { getMaterials as getMaterialsAPI } from "../../api/materialAPI";
import { IDLE, LOADING } from "../../constants";

const initialState = {
    materials: {
        fabric: [],
    },
    status: IDLE,
    error: null,
};

export const setMaterials = createAsyncThunk(
    "materials/setMaterials",
    async (payload) => {
        try {
            let response;
            response = await getMaterialsAPI(payload);
            return { type: payload, data: response.data.materials };
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
export const selectFabrics = (state) => state.materials.materials.fabric;

// materials actions
// export const { } = materialSlice.actions;

export default materialSlice.reducer;