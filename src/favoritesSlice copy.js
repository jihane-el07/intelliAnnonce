import { createSlice } from '@reduxjs/toolkit';

// ✅ Use the initial state from localStorage
const initialState = JSON.parse(localStorage.getItem('favorites')) || [];

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState, // ✅ Apply the initial state here
  reducers: {
    addToFavorites: (state, action) => {
      const exists = state.find(item => item.id === action.payload.id);
      if (!exists) {
        state.push(action.payload);
        localStorage.setItem('favorites', JSON.stringify(state)); // ✅ Save to localStorage
      }
    },
    removeFromFavorites: (state, action) => {
      const updatedFavorites = state.filter(item => item.id !== action.payload.id);
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites)); // ✅ Update localStorage
      return updatedFavorites;
    }
  }
});

export const { addToFavorites, removeFromFavorites } = favoritesSlice.actions;
export default favoritesSlice.reducer;
