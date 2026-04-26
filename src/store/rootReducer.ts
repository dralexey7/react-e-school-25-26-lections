import { combineReducers } from "@reduxjs/toolkit";
import { basketReducer } from "./slices/basketSlice";
import { productSliceReducer } from "./slices/productsSlice";
import { productApi } from "./services/product";

export const rootReducer = combineReducers({
  basket: basketReducer,
  // TODO-RTKQ-01 (livecoding):
  // подключить [productsApi.reducerPath]: productsApi.reducer
  // после создания src/api/productsApi.ts
  products: productSliceReducer,
  [productApi.reducerPath]: productApi.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;
