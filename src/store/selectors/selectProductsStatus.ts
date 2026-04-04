import type { RootState } from "../store";

export const selectProductsStatus = (state: RootState) => {
  return state.products.status;
};
