"use client";
import { createSlice } from "@reduxjs/toolkit";

const carteSlice = createSlice({
  name: "Cart",
  initialState: [],
  reducers: {
    add({ state, action }: any) {
      state.push(action.payload);
    },
    remove(state, action) {
      return state.filter((item: any) => item.id !== action.payload);
    },
  },
});
 export const {add, remove} = carteSlice.actions
 export default carteSlice.reducer