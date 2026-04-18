import type { Product } from "../types/Product";

const DEFAULT_BASE_URL = "http://localhost:3006";

/*
 * TODO(лекция): 
 * Рядом добавить postProduct, updateProduct, deleteProduct и подключить к thunk + UI (см. ProductFormPage, ProductDetailPage).
 */

export async function getProducts(
  baseUrl: string = DEFAULT_BASE_URL,
): Promise<Product[]> {
  const res = await fetch(`${baseUrl}/products`);
  console.log(res);
  if (!res.ok) {
    throw new Error(`getProducts failed: ${res.status} ${res.statusText}`);
  }

  return res.json() as Promise<Product[]>;
}

// TODO(лекция): переписать на axios