import { createSlice } from "@reduxjs/toolkit";
import type { Product } from "../../types/Product";
import { getProductsThunk } from "../../api/getProductsThunk";

interface ProductsSliceState {
  status: "idle" | "pending" | "fulfilled" | "rejected";
  products: Product[];
}

const initialState: ProductsSliceState = {
  status: "idle",
  products: [],
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProductsThunk.pending, (state) => {
        state.status = "pending";
      })
      .addCase(getProductsThunk.fulfilled, (state, action) => {
        state.products = action.payload;
        state.status = "fulfilled";
      })
      .addCase(getProductsThunk.rejected, (state) => {
        state.status = "rejected";
      });

    /*
     * TODO-04 (лекция): extraReducers для thunks из TODO-03, например:
     * — после post: push в state.products или снова dispatch(getProductsThunk);
     * — после patch: заменить элемент по id;
     * — после delete: отфильтровать по id;
     * при необходимости отдельный status «сохранение» для спиннера на форме.
     */
  },
});

export const productSliceReducer = productsSlice.reducer;
