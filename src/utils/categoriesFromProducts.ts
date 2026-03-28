import type { Product } from "../types/Product";

export function getCategoriesFromProducts(products: Product[]): string[] {
  return Array.from(new Set(products.flatMap((p) => p.categories)));
}
