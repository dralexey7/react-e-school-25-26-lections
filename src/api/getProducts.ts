import type { Product } from "../types/Product";
import axios from "axios";

const DEFAULT_BASE_URL = "http://localhost:3006";

// export async function getProducts(
//   baseUrl: string = DEFAULT_BASE_URL,
// ): Promise<Product[]> {
//   const res = await fetch(`${baseUrl}/products`);
//   console.log(res);
//   if (!res.ok) {
//     throw new Error(`getProducts failed: ${res.status} ${res.statusText}`);
//   }

//   return res.json() as Promise<Product[]>;
// }

export async function getProducts() : Promise<Product[]> {
  const res = await axios.get(`${DEFAULT_BASE_URL}/products`);
  return res.data;
}

/*
 * TODO-RTKQ-08 (livecoding):
 * Этот файл станет не нужен после перехода на createApi.
 * В productsApi добавить:
 * - query getProducts (обычный список),
 * - infiniteQuery с запросом /products?cursor=...&limit=...
 *   и ответом { items, nextCursor, hasMore, total }.
 */

