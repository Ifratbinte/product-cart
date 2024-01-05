"use client";

import { createSlice } from "@reduxjs/toolkit";

const findItemIndex = (items, itemId) =>
  items.findIndex((item) => item.id === itemId);

const initialState = {
  data: [],
  total_price: 0,
  total_quantity: 0,
};

const cartSlice = createSlice({
  name: "Cart",
  initialState: initialState,
  reducers: {
    // add(state, action) {
    //   state.push(action.payload);
    // },
    add: (state, action) => {
      const { id, image, title, price } = action.payload;

      // console.log("====payload=====", action.payload);

      const existingItemIndex = findItemIndex(state.data, id);

      if (existingItemIndex !== -1) {
        // Item already exists in the cart, increment the quantity
        state.total_quantity += 1;
        state.data[existingItemIndex].quantity += 1;
      } else {
        // Item doesn't exist in the cart, add a new entry
        state.total_quantity += 1;

        state.data.push({ id, image, title, price, quantity: 1 });
      }
    },

    remove(state, action) {
      const findItm = state.data.find((itm) => itm.id === action.payload);
      const filterData = state.data.filter(
        (item) => item.id !== action.payload
      );

      const quantity = state.total_quantity - findItm.quantity;

      state.total_quantity = quantity;
      state.data = filterData;
    },

    incrementQuantity: (state, action) => {
      const itm = state.data.map((itm) => {
        if (itm.id === action.payload) {
          return {
            ...itm,
            quantity: itm.quantity + 1,
          };
        } else {
          return itm;
        }
      });

      state.total_quantity += 1;
      state.data = itm;
    },
    decrementQuantity: (state, action) => {
      const findItm = state.data.find((itm) => itm.id === action.payload);

      const itm = state.data.map((itm) => {
        if (itm.id === action.payload) {
          return {
            ...itm,
            quantity: itm.quantity === 1 ? 1 : itm.quantity - 1,
          };
        } else {
          return itm;
        }
      });

      state.data = itm;

      state.total_quantity =
        findItm.quantity === 1
          ? state.total_quantity
          : state.total_quantity - 1;
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
