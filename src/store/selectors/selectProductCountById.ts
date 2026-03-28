import type { RootState } from "../store";

export const selectProductCountById = (
  state: RootState,
  id: string,
): number => {
  const product = state.basket.find((basketProduct) => basketProduct[0] === id);
  if (!product) {
    return 0;
  }
  return product[1];
};
