"use client";
import React from "react";
import { Provider } from "react-redux";
import { store, persistor } from "@/store/Store.js";
import { PersistGate } from "redux-persist/integration/react";

const AppProvider = ({ children }: any) => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  );
};

export default AppProvider;
