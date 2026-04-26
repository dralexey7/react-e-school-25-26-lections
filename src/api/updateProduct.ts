import type { Product } from "../types/Product";
import axios from "axios";

const DEFAULT_BASE_URL = "http://localhost:3006";

// export async function updateProduct(
//   baseUrl: string = DEFAULT_BASE_URL,
//   product: {id: string} & Partial<Omit<Product, "id">>,
// ): Promise<Product[]> {
//     const url = new URL(`${baseUrl}/products`);
//     url.searchParams.set("id", product.id);

//     const res = await fetch(url, {
//         method: "POST",
//         body: JSON.stringify(product)
//     });
//     if (!res.ok) {
//         throw new Error(`updateProduct failed: ${res.status} ${res.statusText}`);
//     }

//     return res.json() as Promise<Product[]>;
// }

export async function updateProduct(
    product: {id: string} & Partial<Omit<Product, "id">>,
  ): Promise<Product> {
      const res = await axios.patch(`${DEFAULT_BASE_URL}/products/${product.id}`, product);
      return res.data;
  }
