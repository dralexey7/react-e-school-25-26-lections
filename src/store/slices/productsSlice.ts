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
     * TODO(лекция): обработать fulfilled/pending/rejected для thunks мутаций, например:
     * — после post: добавить товар в state.products или заново dispatch(getProductsThunk);
     * — после patch: заменить элемент по id;
     * — после delete: отфильтровать по id;
     * при необходимости ввести отдельный status для «сохранения», чтобы крутить спиннер на форме.
     */
  },
});

export const productSliceReducer = productsSlice.reducer;
