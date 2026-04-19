import axios from "axios";

const DEFAULT_BASE_URL = "http://localhost:3006";

// export async function deleteProduct(
//   baseUrl: string = DEFAULT_BASE_URL,
//   productId: string,
// ): Promise<Product[]> {
//     const url = new URL(`${baseUrl}/products`);
//     url.searchParams.set("id", productId);

//     const res = await fetch(url, {
//         method: "DELETE",
//     });
//     if (!res.ok) {
//         throw new Error(`getProducts failed: ${res.status} ${res.statusText}`);
//     }

//     return res.json() as Promise<Product[]>;
// }

export async function deleteProduct(
    productId: string,
  ): Promise<string> {
      await axios.delete(`${DEFAULT_BASE_URL}/products/${productId}`);

      return productId;
  }
