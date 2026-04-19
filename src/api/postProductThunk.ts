import { createAsyncThunk } from "@reduxjs/toolkit";
import { postProduct } from "./postProduct";

export const postProductThunk = createAsyncThunk("post/products", postProduct);
