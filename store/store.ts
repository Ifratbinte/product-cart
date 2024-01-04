import { configureStore } from "@reduxjs/toolkit";
import createReducer from "@/store/cart/CartSlice"
const store = configureStore({
    reducer: {
        cart:createReducer
    }
})
export default store