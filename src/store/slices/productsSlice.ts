import { createSlice } from "@reduxjs/toolkit";
import type { Product } from "../../types/Product";
import { getProductsThunk } from "../../api/getProductsThunk";
import { postProductThunk } from "../../api/postProductThunk";
import { updateProductThunk } from "../../api/updateProductThunk";
import { deleteProductThunk } from "../../api/deleteProductThunk";

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
      })
      .addCase(postProductThunk.pending, (state) => {
        state.status = "pending";
      })
      .addCase(postProductThunk.fulfilled, (state, action) => {
        state.products.push(action.payload);
        state.status = "fulfilled";
      })
      .addCase(postProductThunk.rejected, (state) => {
        state.status = "rejected";
      })
      .addCase(updateProductThunk.pending, (state) => {
        state.status = "pending";
      })
      .addCase(updateProductThunk.fulfilled, (state, action) => {
        state.products = state.products.map(product => product.id === action.payload.id ? action.payload : product);
        state.status = "fulfilled";
      })
      .addCase(updateProductThunk.rejected, (state) => {
        state.status = "rejected";
      })
      .addCase(deleteProductThunk.pending, (state) => {
        state.status = "pending";
      })
      .addCase(deleteProductThunk.fulfilled, (state, action) => {
        state.products = state.products.filter(product => product.id !== action.payload);
        state.status = "fulfilled";
      })
      .addCase(deleteProductThunk.rejected, (state) => {
        state.status = "rejected";
      });
  },
});

export const productSliceReducer = productsSlice.reducer;
