import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IFeaturedProduct } from "../types";

export interface CartItem {
  product?: IFeaturedProduct;
  quantity: number;
  isCheck: boolean;
}

interface CartState {
  items: CartItem[];
}

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Omit<CartItem, "isCheck">>) => {
      const existingItem = state.items.find(
        (item) =>
          item.product?.id_product === action.payload.product?.id_product
      );
      if (existingItem) {
        existingItem.quantity += action.payload.quantity;
      } else {
        state.items.push({ ...action.payload, isCheck: true });
      }
    },
    setCheck: (
      state,
      action: PayloadAction<{ id: number; isCheck: boolean }>
    ) => {
      const item = state.items.find(
        (item) => item.product?.id_product === action.payload.id
      );
      if (item) {
        item.isCheck = action.payload.isCheck;
      }
    },
    setAllCheck: (state, action: PayloadAction<boolean>) => {
      state.items = state.items.map((item) => ({
        ...item,
        isCheck: action.payload,
      }));
    },
    removeAllCheck: (state) => {
      state.items = state.items.filter((item) => !item.isCheck);
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter(
        (item) => item.product?.id_product !== action.payload
      );
    },
    increaseQuantity: (state, action: PayloadAction<number>) => {
      const item = state.items.find(
        (item) => item.product?.id_product === action.payload
      );
      if (item) {
        item.quantity += 1;
      }
    },
    decreaseQuantity: (state, action: PayloadAction<number>) => {
      const item = state.items.find(
        (item) => item.product?.id_product === action.payload
      );
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const {
  addToCart,
  setCheck,
  setAllCheck,
  removeAllCheck,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
