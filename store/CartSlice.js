"use client";
import { createSlice } from "@reduxjs/toolkit";
const findItemIndex = (items, itemId) =>
  items.findIndex((item) => item.id === itemId);

const cartSlice = createSlice({
  name: "Cart",
  initialState: [],
  reducers: {
    // add(state, action) {
    //   state.push(action.payload);
    // },
    add: (state, action) => {
      const { id, image, title, price } = action.payload;
      const existingItemIndex = findItemIndex(state, id);

      if (existingItemIndex !== -1) {
        // Item already exists in the cart, increment the quantity
        state[existingItemIndex].quantity += 1;
      } else {
        // Item doesn't exist in the cart, add a new entry
        state.push({ id, image, title, price, quantity: 1 });
      }
    },
    remove(state, action) {
      return state.filter((item) => item.id !== action.payload);
    },

    incrementQuantity: (state) => {
      state.length += 1;
    },
    decrementQuantity: (state) => {
      state.length -= 1;
    },
    incrementByAmount: (state, action) => {
      state.length += action.payload;
    },
  },
});

export const {
  add,
  remove,
  incrementQuantity,
  decrementQuantity,
  incrementByAmount,
} = cartSlice.actions;
export default cartSlice.reducer;
