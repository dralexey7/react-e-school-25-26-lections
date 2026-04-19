import { createAsyncThunk } from "@reduxjs/toolkit";
import { updateProduct } from "./updateProduct";

export const updateProductThunk = createAsyncThunk("update/products", updateProduct);