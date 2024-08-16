import { createSlice } from "@reduxjs/toolkit";

const favoriteSlice = createSlice({
  name: "favorites",
  initialState: {
    favorites: [],
  },
  reducers: {
    addFavorite: (state, action) => {
      const item = action.payload;
      const itemIndex = state.favorites.findIndex(fav => fav.id === item.id);
      
      if (itemIndex === -1) {
        // Item is not in the favorites list, add it
        state.favorites.push(item);
      } else {
        // Item is already in the favorites list, remove it
        state.favorites.splice(itemIndex, 1);
      }
    },

    removeFavorite: (state, action) => {
      state.favorites = state.favorites.filter(item => item.id !== action.payload.id);
    },
  },
});

export const { addFavorite, removeFavorite } = favoriteSlice.actions;
export default favoriteSlice.reducer;
