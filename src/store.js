import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/AddToCart/authSlice";
import cartReducer from "./features/AddToCart/cartSlice.js";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    auth: authReducer,
  },
});

export default store;
