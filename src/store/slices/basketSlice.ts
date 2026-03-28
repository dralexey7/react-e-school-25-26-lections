import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export type ProductCount = [string, number];

export interface BasketState {
  productIds: ProductCount[];
}

const initialState: ProductCount[] = [];

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action: PayloadAction<string>) => {
      const productsMap = new Map(state);

      const productId = action.payload;
      const stateProduct = productsMap.get(productId);
      if (!stateProduct) {
        productsMap.set(productId, 1);
        return Array.from(productsMap.entries());
      }

      productsMap.set(productId, stateProduct + 1);
      return Array.from(productsMap.entries());
    },
    deleteFromBasket: (state, action: PayloadAction<string>) => {
      const productsMap = new Map(state);
      const productId = action.payload;
      const stateProduct = productsMap.get(productId);
      if (!stateProduct) {
        return;
      }

      if (stateProduct === 1) {
        productsMap.delete(productId);
        return Array.from(productsMap.entries());
      }
      productsMap.set(productId, stateProduct - 1);
      return Array.from(productsMap.entries());
    },
    clearBasket: () => {
      return initialState;
    },
  },
});

export const { addToBasket, deleteFromBasket, clearBasket } =
  basketSlice.actions;

export const basketReducer = basketSlice.reducer;
