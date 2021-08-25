import { configureStore } from '@reduxjs/toolkit';
import apartmentsReducer from '../features/apartments/apartmentsSlice';

export const store = configureStore({
  reducer: {
    apartments: apartmentsReducer,
  },
});
