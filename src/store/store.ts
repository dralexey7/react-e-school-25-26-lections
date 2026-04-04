import { configureStore } from "@reduxjs/toolkit";
import { loggerMiddleware } from "./middleware/loggerMiddleware";
import { basketReducer } from "./slices/basketSlice";
import { productSliceReducer } from "./slices/productsSlice";

export const store = configureStore({
  reducer: {
    basket: basketReducer,
    products: productSliceReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(loggerMiddleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
