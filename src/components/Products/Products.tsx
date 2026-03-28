import type { Product as ProductType } from "../../types/Product";
import { Product } from "../Product/Product";
import styles from "./styles.module.css";

interface ProductsProps {
  products?: ProductType[];
}

export const Products: React.FC<ProductsProps> = ({ products }) => {
  if (!products) {
    return null;
  }

  return (
    <div className={styles.grid}>
      {products.map((product) => (
        <div key={product.id} className={styles.cell}>
          <Product product={product} />
        </div>
      ))}
    </div>
  );
};
