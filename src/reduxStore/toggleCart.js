import { createSlice } from "@reduxjs/toolkit";
const initialToggleState = {
  isCartOpen: false,
};
export const toggleCartSlice = createSlice({
  name: "toggleCart",
  initialState: initialToggleState,
  reducers: {
    toggleCart: (state) => {
      state.isCartOpen = !state.isCartOpen;
    },
  },
});
export const toggleCartActions = toggleCartSlice.actions;
export default toggleCartSlice.reducer;
