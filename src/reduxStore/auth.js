import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: localStorage.getItem("idtoken") || "", // getting token stored in local storage
  isAuthenticated: !!localStorage.getItem("idtoken") || false, // converting token into boolean value
};
export const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    login: (state, action) => {
      state.isAuthenticated = true;
      state.token = action.payload;
      localStorage.setItem("idtoken", action.payload);
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.token = "";
      localStorage.removeItem("idtoken");
    },
  },
});

export const authsliceAction = authSlice.actions;
export default authSlice.reducer;
