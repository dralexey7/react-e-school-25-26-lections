import type { Product } from "../../types/Product";
import type { RootState } from "../rootReducer";

export const selectProductById = (state: RootState, productId: string): Product | undefined => {
  return state.products.products.find((product) => product.id === productId);
};
