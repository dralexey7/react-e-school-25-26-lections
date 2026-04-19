import { createAsyncThunk } from "@reduxjs/toolkit";
import { deleteProduct } from "./deleteProduct";

export const deleteProductThunk = createAsyncThunk("delete/products", (productId: string) => deleteProduct(productId));