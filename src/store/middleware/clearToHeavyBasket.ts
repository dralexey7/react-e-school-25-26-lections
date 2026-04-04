import { createListenerMiddleware } from "@reduxjs/toolkit";
import type { RootState } from "../rootReducer";
import { selectProductsCount } from "../selectors/selectProductsCount";
import { addToBasket, clearBasket } from "../slices/basketSlice";

export const listenerMiddleware = createListenerMiddleware<RootState>();

listenerMiddleware.startListening({
  actionCreator: addToBasket,
  effect: (_, listerApi) => {
    const state = listerApi.getState();
    const numberOfProducts = selectProductsCount(state);
    if (numberOfProducts >= 5) {
      listerApi.dispatch(clearBasket());
    }
  },
});
