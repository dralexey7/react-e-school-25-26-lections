import { createAsyncThunk } from "@reduxjs/toolkit";
import { getProducts } from "./getProducts";

/*
 * TODO(лекция): рядом завести createAsyncThunk для post/update/delete
 * и в productsSlice — extraReducers (или повторный вызов getProductsThunk после мутации).
 */

export const getProductsThunk = createAsyncThunk("get/products", getProducts);
