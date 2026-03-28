import type { RootState } from "../store";
import { selectAllProducts } from "./selectAllProducts";
import { selectProductCountById } from "./selectProductCountById";

export const selectTotalPrice = (state: RootState): number => {
  const products = selectAllProducts(state);
  const totalPrice = products.reduce((acc, val) => {
    const numberOfProducts = selectProductCountById(state, val.id);
    return acc + numberOfProducts * val.price;
  }, 0);
  return totalPrice;
};
