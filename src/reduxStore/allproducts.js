import { createSlice } from "@reduxjs/toolkit";
const initialAllProducts = {
  items: [],
};
export const productsSlice = createSlice({
  name: "allProducts",
  initialState: initialAllProducts,
  reducers: {
    products: (state, action) => {
      state.items = action.payload;
    },
  },
});
export const allProductsAction = productsSlice.actions;
export default productsSlice.reducer;
