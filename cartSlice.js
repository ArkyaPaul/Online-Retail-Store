import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addItem: (state, action) => {
      const existingItem = state.find(item => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }
    },
    removeItem: (state, action) => {
      const existingItem = state.find(item => item.id === action.payload);
      if (existingItem) {
        if (existingItem.quantity > 1) {
          existingItem.quantity -= 1;
        } else {
          return state.filter(item => item.id !== action.payload);
        }
      }
    },
    clearCart: () => {
      return [];
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export const getItemsSelector = (state) => state.cart;

export default cartSlice.reducer;
