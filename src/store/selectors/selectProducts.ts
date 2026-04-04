import type { RootState } from "../rootReducer";

export const selectProducts = (state: RootState) => {
  return state.products.products;
};
