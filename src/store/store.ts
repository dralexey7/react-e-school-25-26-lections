import { configureStore } from "@reduxjs/toolkit";
import { loggerMiddleware } from "./middleware/loggerMiddleware";
import { listenerMiddleware } from "./middleware/clearToHeavyBasket";
import { rootReducer } from "./rootReducer";

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .prepend(listenerMiddleware.middleware)
      .concat(loggerMiddleware),
});

export type { RootState } from "./rootReducer";
export type AppDispatch = typeof store.dispatch;
