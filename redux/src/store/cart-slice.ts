import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

type CartItem = {
  id: string;
  title: string;
  price: number;
  quantity: number;
};
type CartState = {
  items: CartItem[];
};

const initialState: CartState = {
  items: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState: initialState,
  reducers: {
    addToCart(
      state,
      action: PayloadAction<{ id: string; title: string; price: number }>
    ) {
      const ItemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      if (ItemIndex >= 0) {
        state.items[ItemIndex].quantity++;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart(state, action: PayloadAction<string>) {
      const ItemIndex = state.items.findIndex(
        (item) => item.id === action.payload
      );
      if (ItemIndex >= 0) {
        state.items.splice(ItemIndex, 1);
      } else {
        state.items[ItemIndex].quantity--;
      }
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions; // cartSlice의 actions를 export
