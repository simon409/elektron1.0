import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    initializeCart: (state, action) => {
      console.log('Initializing cart with:', action.payload);
      state.items = action.payload;
    },
    addItem: (state, action) => {
      console.log('Adding item to cart:', action.payload);
      state.items.push(action.payload);
      localStorage.setItem('cart', JSON.stringify(state.items));
    },
    removeItem: (state, action) => {
      state.items = state.items.filter(item => item.productId !== action.payload);
      localStorage.setItem('cart', JSON.stringify(state.items));
    },
    clearCart: (state) => {
      state.items = [];
      localStorage.removeItem('cart');
    },
    increaseQuantity: (state, action) => {
      const item = state.items.find(item => item.productId === action.payload);
      if (item) {
        item.quantity += 1;
        localStorage.setItem('cart', JSON.stringify(state.items));
      } else {
        console.log('Item not found:', action.payload);
      }
    },
    decreaseQuantity: (state, action) => {
      const item = state.items.find(item => item.productId === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
        localStorage.setItem('cart', JSON.stringify(state.items));
      } else if (item) {
        console.log('Cannot decrease quantity below 1:', action.payload);
      } else {
        console.log('Item not found:', action.payload);
      }
    }
  },
});

export const { initializeCart, addItem, removeItem, clearCart, decreaseQuantity, increaseQuantity } = cartSlice.actions;
export default cartSlice.reducer;
