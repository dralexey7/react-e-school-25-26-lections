import { createAsyncThunk } from "@reduxjs/toolkit";
import { getProducts } from "./getProducts";

export const getProductsThunk = createAsyncThunk("get/products", getProducts);
