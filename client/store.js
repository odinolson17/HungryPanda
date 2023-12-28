import { configureStore } from '@reduxjs/toolkit';
import hungrypandaReducer from './hungrypandaSlice.js';

export const store = configureStore({
  reducer: {
    hungrypanda: hungrypandaReducer
  }
});