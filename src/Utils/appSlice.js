import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice ({
    name : "app",
    initialState: {
        isMenuOpen: false,
        isSuggestionBox: true,   
    },
    reducers: {
        toggleMenu: (state) => {
            state.isMenuOpen = !state.isMenuOpen;
        },
        closeMenu:(state) => {
            state.isMenuOpen = true;
        },
        showSuggession:(state) => {
            state.isSuggestionBox = false;
        }
    },
});


export const { toggleMenu, closeMenu, showSuggession} = appSlice.actions;
export default appSlice.reducer;