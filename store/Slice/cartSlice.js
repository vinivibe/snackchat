import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      const { product, quantity } = action.payload;
      console.log(`Adding product ${product.id} with quantity ${quantity}`);
      const existingItem = state.items.find((i) => i.id === product.id);

      if (existingItem) {
        console.log(`Product ${product.id} exists, incrementing quantity.`);
        existingItem.quantity += quantity;
      } else {
        console.log(`Product ${product.id} does not exist, adding to cart.`);
        state.items.push({ ...product, quantity });
      }
    },
    removeItem: (state, action) => {
      const id = action.payload;
      const index = state.items.findIndex((item) => item.id === id);
      if (index !== -1) {
        state.items.splice(index, 1);
      }
    },
  },
});

export const { addItem, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
