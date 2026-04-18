import express from "express";
import { randomUUID } from "node:crypto";
import { mockProducts } from "../src/materials/mock.ts";
import type { Product, ProductSpecifications } from "../src/types/Product.ts";
import cors from "cors";

const PORT = 3006;

/** In-memory копия каталога; перезапуск сервера сбрасывает к mock. */
let products: Product[] = structuredClone(mockProducts);

const app = express();
app.use(cors());
app.use(express.json());

function findIndexById(id: string): number {
  return products.findIndex((p) => p.id === id);
}

function mergeSpecifications(
  base: ProductSpecifications,
  patch?: Partial<ProductSpecifications>,
): ProductSpecifications {
  if (!patch) return base;
  return {
    features: patch.features ?? base.features,
    details: patch.details ?? base.details,
    variants: patch.variants ?? base.variants,
  };
}

app.get("/products", async (_req, res) => {
  await new Promise((r) => setTimeout(r, 2000));
  res.json(products);
});

app.get("/products/:id", (req, res) => {
  const { id } = req.params;
  const product = products.find((p) => p.id === id);
  if (!product) {
    res.status(404).json({ message: "Товар не найден" });
    return;
  }
  res.json(product);
});

app.post("/products", (req, res) => {
  const body = req.body as Partial<Product>;
  if (!body || typeof body.name !== "string" || body.name.trim() === "") {
    res.status(400).json({ message: "Нужно поле name" });
    return;
  }

  const specifications: ProductSpecifications = {
    features: Array.isArray(body.specifications?.features)
      ? body.specifications!.features
      : [],
    details:
      body.specifications?.details &&
      typeof body.specifications.details === "object"
        ? body.specifications.details
        : {},
    variants: Array.isArray(body.specifications?.variants)
      ? body.specifications!.variants
      : [],
  };

  const newProduct: Product = {
    id: randomUUID(),
    name: body.name.trim(),
    price: typeof body.price === "number" ? body.price : Number(body.price) || 0,
    description:
      typeof body.description === "string" ? body.description : "",
    categories: Array.isArray(body.categories) ? body.categories : [],
    brand: typeof body.brand === "string" ? body.brand : "",
    rating:
      typeof body.rating === "number"
        ? body.rating
        : Number(body.rating) || 0,
    specifications,
  };

  products = [...products, newProduct];
  res.status(201).json(newProduct);
});

app.patch("/products/:id", (req, res) => {
  const { id } = req.params;
  const index = findIndexById(id);
  if (index === -1) {
    res.status(404).json({ message: "Товар не найден" });
    return;
  }

  const body = req.body as Partial<Omit<Product, "id">>;
  const current = products[index]!;

  const updated: Product = {
    ...current,
    ...(typeof body.name === "string" ? { name: body.name } : {}),
    ...(typeof body.price === "number" || body.price !== undefined
      ? {
          price:
            typeof body.price === "number"
              ? body.price
              : Number(body.price) || current.price,
        }
      : {}),
    ...(typeof body.description === "string"
      ? { description: body.description }
      : {}),
    ...(Array.isArray(body.categories) ? { categories: body.categories } : {}),
    ...(typeof body.brand === "string" ? { brand: body.brand } : {}),
    ...(typeof body.rating === "number" || body.rating !== undefined
      ? {
          rating:
            typeof body.rating === "number"
              ? body.rating
              : Number(body.rating) || current.rating,
        }
      : {}),
    specifications: mergeSpecifications(
      current.specifications,
      body.specifications,
    ),
    id: current.id,
  };

  products = [
    ...products.slice(0, index),
    updated,
    ...products.slice(index + 1),
  ];
  res.json(updated);
});

app.delete("/products/:id", (req, res) => {
  const { id } = req.params;
  const index = findIndexById(id);
  if (index === -1) {
    res.status(404).json({ message: "Товар не найден" });
    return;
  }
  products = products.filter((p) => p.id !== id);
  res.status(204).send();
});

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
