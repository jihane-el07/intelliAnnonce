import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './authReducer';
import favoritesReducer from "./favoritesSlice";
import languageReducer from './languages/languageSlice'

export default configureStore({
  reducer: {
    auth: authReducer,
    favorites: favoritesReducer,
    language: languageReducer,
  }
});