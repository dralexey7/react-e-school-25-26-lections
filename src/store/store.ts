import { configureStore } from "@reduxjs/toolkit";
import { loggerMiddleware } from "./middleware/loggerMiddleware";
import { listenerMiddleware } from "./middleware/clearToHeavyBasket";
import { rootReducer } from "./rootReducer";
import { productApi } from "./services/product";

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .prepend(listenerMiddleware.middleware)
      // TODO-RTKQ-02 (livecoding):
      // добавить .concat(productsApi.middleware) после создания createApi.
      .concat(loggerMiddleware)
      .concat(productApi.middleware),
});

export type { RootState } from "./rootReducer";
export type AppDispatch = typeof store.dispatch;
