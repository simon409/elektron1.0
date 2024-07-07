// store.js
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice'; // Ensure this path is correct

export const store = configureStore({
  reducer: {
    cart: cartReducer, // Ensure cart reducer is included
  },
});
