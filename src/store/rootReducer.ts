import { combineReducers } from "@reduxjs/toolkit";
import { basketReducer } from "./slices/basketSlice";
import { productSliceReducer } from "./slices/productsSlice";

export const rootReducer = combineReducers({
  basket: basketReducer,
  products: productSliceReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
