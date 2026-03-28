import { useState } from "react";
import { Link, useSearchParams } from "react-router";
import { Counter } from "../Counter/Counter";
import type { Product as ProductType } from "../../types/Product";
import styles from "./Product.module.css";

interface ProductProps {
  product: ProductType;
}

export const Product: React.FC<ProductProps> = ({ product }) => {
  const [quantity, setQuantity] = useState(0);
  const [searchParams] = useSearchParams();
  const qs = searchParams.toString();
  const to = qs ? `/products/${product.id}?${qs}` : `/products/${product.id}`;

  const isBooks = product.categories.some((category) => category === "Книги");

  return (
    <div className={styles.card}>
      <Link className={styles.linkedMain} to={to}>
        <div className={styles.top}>
          <div className={styles.badges}>
            {product.categories.slice(0, 2).map((c) => (
              <span key={c} className={styles.badge}>
                {c}
              </span>
            ))}
            {product.categories.length > 2 ? (
              <span className={styles.badgeMuted}>+{product.categories.length - 2}</span>
            ) : null}
          </div>
          {isBooks ? <span className={styles.bookTag}>Книга</span> : null}
        </div>
        <h2 className={styles.title}>{product.name}</h2>
        <p className={styles.brand}>{product.brand}</p>
        <p className={styles.description}>{product.description}</p>
      </Link>
      <div className={styles.counterRow}>
        <Counter value={quantity} onChange={setQuantity} />
      </div>
      <Link className={styles.linkedFooter} to={to}>
        <div className={styles.footer}>
          <span className={styles.price}>{product.price.toLocaleString("ru-RU")} ₽</span>
          <span className={styles.rating} aria-hidden>
            ★ {product.rating}
          </span>
        </div>
      </Link>
    </div>
  );
};
