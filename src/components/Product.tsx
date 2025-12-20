import type { Product as ProductType } from "../types/Product";

interface ProductProps {
  product: ProductType;
}

export const Product: React.FC<ProductProps> = ({ product }) => {
  const isBooks = product.categories.some((category) => category === "Книги");

  return (
    <div>
      <p>{`name: ${product.name}, categories: ${product.categories.join(
        " | "
      )}`}</p>
      {isBooks ? <p>Читать хорошо</p> : <p>Это не книга!</p>}
    </div>
  );
};
