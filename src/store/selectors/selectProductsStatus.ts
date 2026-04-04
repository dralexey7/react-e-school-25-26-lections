import type { RootState } from "../rootReducer";

export const selectProductsStatus = (state: RootState) => {
  return state.products.status;
};
