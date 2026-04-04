import { mockProducts } from "../../materials/mock";
import type { Product } from "../../types/Product";
import type { RootState } from "../rootReducer";

export const selectAllProducts = (state: RootState): Product[] => {
  const productIds = state.basket.map((item) => item[0]);
  const products = productIds
    .map((id) => mockProducts.find((product) => product.id === id))
    .filter((product) => !!product);
  return products;
};
