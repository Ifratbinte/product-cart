import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import cartReducer from "./CartSlice";

const cartConfig = {
  key: "cartData",
  storage,
};

const store = configureStore({
  reducer: {
    cart: persistReducer(cartConfig, cartReducer),
  },
  devTools: process.env.NODE_ENV !== "production",
});

const persistor = persistStore(store);

export { persistor, store };
