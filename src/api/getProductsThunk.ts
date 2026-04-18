import { createAsyncThunk } from "@reduxjs/toolkit";
import { getProducts } from "./getProducts";

/*
 * TODO-03 (лекция): рядом завести createAsyncThunk для post/update/delete
 * (вызывать функции из TODO-01). Связка со слайсом — в TODO-04.
 */

export const getProductsThunk = createAsyncThunk("get/products", getProducts);
