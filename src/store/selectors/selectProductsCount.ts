import type { RootState } from "../rootReducer";
import { selectAllProducts } from "./selectAllProducts";

export const selectProductsCount = (state: RootState): number => {
  const products = selectAllProducts(state);
  return products.length;
};
