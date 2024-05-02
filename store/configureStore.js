// configureStore.js
import { configureStore } from '@reduxjs/toolkit';
import favoritesReducer from './Slice/favoritesSlice';
import cartReducer from './Slice/cartSlice';
import userSlice from './Slice/userSlice';
import foodReducer from './Slice/foodSlice'

const store = configureStore({
  reducer: {
    cart: cartReducer,
    favorites: favoritesReducer,
    user: userSlice,
    food: foodReducer
  },
});



export default store;


