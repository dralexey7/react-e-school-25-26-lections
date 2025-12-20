import type { Product as ProductType } from "../../types/Product";
import { Product } from "../Product";
import styles from "./styles.module.css";
import cn from "classnames";

interface ProductsProps {
  products?: ProductType[];
}

export const Products: React.FC<ProductsProps> = ({ products }) => {
  if (!products) {
    return null;
  }

  return (
    <div className={cn(styles.container, styles.secondClass)}>
      {products.map((product) => (
        <Product product={product} key={product.id} />
      ))}
    </div>
  );
};
