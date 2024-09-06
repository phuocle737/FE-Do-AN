import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  openMenu: true,
};

const appSlice = createSlice({
  name: "app",
  initialState: initialState,
  reducers: {
    setOpenMenu: (state, action) => {
      state.openMenu = action.payload;
    },
  },
  extraReducers: (builder) => {
    // builder.setOpenMenu((state, action) => {
    //   state.openMenu = action.payload;
    // });
  },
});

export const { setOpenMenu } = appSlice.actions;

export const appReducer = appSlice.reducer;
