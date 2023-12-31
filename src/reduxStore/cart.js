import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
const initialCartState = {
  cartItems: [],
  totalQuantity: 0,
  totalAmount: 0,
};
export const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    addToCart: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.cartItems.find(
        (item) => item.id === newItem.id
      );

      if (!existingItem) {
        state.cartItems.push({
          id: newItem.id,
          title: newItem.title,
          price: newItem.price,
          image: newItem.image,
          qty: 1,
          category: newItem.category,
          totalPrice: newItem.price,
        });
        state.totalQuantity++;
        state.totalAmount += newItem.price;
        toast.success("Item added to cart", {
          position: "bottom-left",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      } else {
        existingItem.qty++;
        state.totalQuantity++;
        state.totalAmount += newItem.price;
        existingItem.totalPrice += newItem.price;
      }
    },
    removeFromCart: (state, action) => {
      const id = action.payload;
      const existingItem = state.cartItems.find((item) => item.id === id);
      if (existingItem.qty === 1) {
        state.cartItems = state.cartItems.filter((item) => item.id !== id);
        state.totalAmount -= existingItem.totalPrice;
        state.totalQuantity -= existingItem.qty;
        toast.success("Item removed from cart", {
          position: "bottom-left",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      } else {
        existingItem.qty--;
        existingItem.totalPrice -= existingItem.price;
        state.totalAmount -= existingItem.price;
        state.totalQuantity--;
      }
    },
    clearCart: (state) => {
      state.cartItems = [];
      state.totalAmount = 0;
      state.totalQuantity = 0;
      toast.success("Cart cleared", {
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
export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
