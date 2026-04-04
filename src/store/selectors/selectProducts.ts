import type { RootState } from "../store";

export const selectProducts = (state: RootState) => {
  return state.products.products;
};
