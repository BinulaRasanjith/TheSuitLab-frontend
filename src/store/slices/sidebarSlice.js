import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isOpen: true,
};

const sidebarSlice = createSlice({
    name: 'sidebar',
    initialState,
    reducers: {
        toggleSidebar: (state) => {
            state.isOpen = !state.isOpen;
        },
        setSidebarOpenState: (state, action) => {
            state.isOpen = action.payload;
        },
    }
});


export const selectSidebarIsOpen = (state) => state.sidebar.isOpen;
export const { toggleSidebar, setSidebarOpenState } = sidebarSlice.actions;
export default sidebarSlice.reducer;
