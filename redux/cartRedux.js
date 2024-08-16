import {createSlice} from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cart: [],
  },
  reducers: {
    addCart: (state, action) => {
      const item = action.payload;
      const itemIndex = state.cart.findIndex(car => car.id === item.id);

      if (itemIndex === -1) {
        // Item is not in the favorites list, add it
        state.cart.push(item);
      } else {
        // Item is already in the favorites list, remove it
        state.cart.splice(itemIndex, 1);
      }
    },

    removeCart: (state, action) => {
      state.cart = state.cart.filter(item => item.id !== action.payload.id);
    },
  },
});

export const {addCart, removeCart} = cartSlice.actions;
export default cartSlice.reducer;
