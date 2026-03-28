import { Link } from "react-router";
import styles from "./ProductNotFound.module.css";

interface ProductNotFoundProps {
  catalogSearch: string;
}

export const ProductNotFound = ({ catalogSearch }: ProductNotFoundProps) => {
  return (
    <div className={styles.root}>
      <p className={styles.text}>Товар не найден.</p>
      <Link
        className={styles.link}
        to={{ pathname: "/products", search: catalogSearch }}
      >
        В каталог
      </Link>
    </div>
  );
};
