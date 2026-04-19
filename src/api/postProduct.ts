import axios from "axios";
import type { Product } from "../types/Product";

const DEFAULT_BASE_URL = "http://localhost:3006";

/*
 * TODO-01 (лекция): доработать getProducts (fetch: ошибки, при желании signal/таймаут)
 * и рядом добавить postProduct, updateProduct, deleteProduct под ваш сервер.
 */

// export async function postProduct(
//   baseUrl: string = DEFAULT_BASE_URL,
//   product: Omit<Product, "id">,
// ): Promise<Product[]> {
//   const res = await fetch(`${baseUrl}/products`, {
//     method: "POST",
//     body: JSON.stringify(product)
//   });
//   console.log(res);
//   if (!res.ok) {
//     throw new Error(`getProducts failed: ${res.status} ${res.statusText}`);
//   }

//   return res.json() as Promise<Product[]>;
// }

export async function postProduct(product: Omit<Product, "id">) : Promise<Product> {
  const res = await axios.post(`${DEFAULT_BASE_URL}/products`, product);
  return res.data;
}

// TODO-02 (лекция): переписать выбранные запросы на axios (instance, interceptors по желанию).