import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [
    { id: 1, name: "Product 1", quantity: 1, price: 10 },
    { id: 2, name: "Product 2", quantity: 2, price: 15 },
  ],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload.id);
      if (item) {
        item.quantity += 1;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },
    removeItem: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
    updateQuantity: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload.id);
      if (item) item.quantity = action.payload.quantity;
    },
  },
});

export const { addItem, removeItem, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;
