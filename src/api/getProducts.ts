import type { Product } from "../types/Product";

const DEFAULT_BASE_URL = "http://localhost:3005";

export async function getProducts(
  baseUrl: string = DEFAULT_BASE_URL,
): Promise<Product[]> {
  const res = await fetch(`${baseUrl}/products`);
  if (!res.ok) {
    throw new Error(`getProducts failed: ${res.status} ${res.statusText}`);
  }
  return res.json() as Promise<Product[]>;
}
