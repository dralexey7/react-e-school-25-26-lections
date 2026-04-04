import express from "express";
import { mockProducts } from "../src/materials/mock.ts";

const PORT = 3005;

const app = express();

app.get("/products", (_req, res) => {
  res.json(mockProducts);
});

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
