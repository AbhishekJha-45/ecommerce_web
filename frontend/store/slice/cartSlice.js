import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      // console.log(action.payload);
      const existingItem = state.cart.find(
        (item) => item._id === action.payload._id
      );

      if (existingItem) {
        state.cart = state.cart.map((item) =>
          item._id === action.payload._id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },
    decrementQuantity: (state, action) => {
      const existingItem = state.cart.find(
        (item) => item._id === action.payload._id
      );

      if (existingItem.quantity === 1) {
        state.cart = state.cart.filter((item) => item._id !== action.payload._id);
      } else {
        state.cart = state.cart.map((item) =>
          item._id === action.payload._id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );
      }
    },
    deleteFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item._id !== action.payload._id);
    },
  },
});

export const { addToCart, decrementQuantity, deleteFromCart } =
  cartSlice.actions;
export default cartSlice.reducer;
