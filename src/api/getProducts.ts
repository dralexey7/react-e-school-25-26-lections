import type { Product } from "../types/Product";

const DEFAULT_BASE_URL = "http://localhost:3006";

/*
 * TODO-01 (лекция): доработать getProducts (fetch: ошибки, при желании signal/таймаут)
 * и рядом добавить postProduct, updateProduct, deleteProduct под ваш сервер.
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

// TODO-02 (лекция): переписать выбранные запросы на axios (instance, interceptors по желанию).