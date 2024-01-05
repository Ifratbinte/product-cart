"use client";
import { createSlice } from "@reduxjs/toolkit";
const cartSlice = createSlice({
  name: "Cart",
  initialState: [],
  reducers: {
    add(state, action) {
      state.push(action.payload);
    },
    remove(state, action) {
      return state.filter((item) => item.id !== action.payload);
    },
    // incrementQuantity: (state, action) => {
    //   const item = state.find((item) => item.id === action.payload.id);
    //   if (item) {
    //     item.quantity += 1;
    //   }
    // },
    // decrementQuantity: (state, action) => {
    //   const item = state.find((item) => item.id === action.payload.id);
    //   if (item && item.quantity > 1) {
    //     item.quantity -= 1;
    //   }
    // },
    incrementQuantity: (state) => {
      state.length += 1;
    },
    decrementQuantity: (state) => {
      state.length -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
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
