import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

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
      toast.success("Logged In Successfully", {
        position: "bottom-left",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.token = "";
      localStorage.removeItem("idtoken");
      toast.success("Signed out Successfully", {
        position: "bottom-left",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    },
  },
});

export const authsliceAction = authSlice.actions;
export default authSlice.reducer;
