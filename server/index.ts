import express from "express";
import { mockProducts } from "../src/materials/mock.ts";
import cors from "cors";

const PORT = 3006;

const app = express();
app.use(cors());

app.get("/products", (_req, res) => {
  res.json(mockProducts);
});

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
