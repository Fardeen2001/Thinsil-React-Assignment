import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
};
export const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    authentication: (state, action) => {
      state.isAuthenticated = action.payload;
    },
  },
});

export const sliceAction = authSlice.actions;
export default authSlice.reducer;
