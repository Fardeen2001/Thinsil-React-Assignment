import { configureStore } from "@reduxjs/toolkit";
import auth from "./auth";
import allproducts from "./allproducts";
import cart from "./cart";
import toggleCart from "./toggleCart";

export const store = configureStore({
  reducer: {
    auth: auth,
    allProducts: allproducts,
    cart: cart,
    toggleCart: toggleCart,
  },
});
