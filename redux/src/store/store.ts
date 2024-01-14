import { configureStore } from '@reduxjs/toolkit';
import { cartSlice } from './cart-slice';

export const store = configureStore({
  reducer: {
    cart: cartSlice.reducer, // cartSlice의 reducer를 store에 등록
  },
});

export type AppDispatch = typeof store.dispatch; // typeof store.dispatch를 AppDispatch로 export - 타입 추론을 위해
