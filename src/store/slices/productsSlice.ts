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
  },
});

export const productSliceReducer = productsSlice.reducer;
