import { configureStore } from "@reduxjs/toolkit";
import auth from "./auth";
import allproducts from "./allproducts";

export const store = configureStore({
  reducer: {
    auth: auth,
    allProducts: allproducts,
  },
});
