import { useState } from "react";
import { Link, useLocation, useParams } from "react-router";
import { Counter } from "../../components/Counter/Counter";
import { mockProducts } from "../../materials/mock";
import styles from "./ProductDetailPage.module.css";
import { ProductNotFound } from "./ProductNotFound";

export const ProductDetailPage = () => {
  const [quantity, setQuantity] = useState(0);
  const { productId } = useParams<{ productId: string }>();
  const location = useLocation();
  const listSearch = location.search;

  const product = mockProducts.find((p) => p.id === productId);

  if (!product) {
    return <ProductNotFound catalogSearch={listSearch} />;
  }

  const { specifications } = product;

  return (
    <div className={styles.page}>
      <Link
        className={styles.backLink}
        to={{ pathname: "/products", search: listSearch }}
      >
        ← Назад к каталогу
      </Link>

      <article className={styles.surface}>
        <header className={styles.header}>
          <div className={styles.badges}>
            {product.categories.map((c) => (
              <span key={c} className={styles.badge}>
                {c}
              </span>
            ))}
          </div>
          <h1 className={styles.name}>{product.name}</h1>
          <p className={styles.meta}>
            <span className={styles.brand}>{product.brand}</span>
            <span
              className={styles.rating}
              aria-label={`Рейтинг ${product.rating}`}
            >
              ★ {product.rating}
            </span>
          </p>
        </header>

        <div className={styles.priceRow}>
          <p className={styles.price}>
            {product.price.toLocaleString("ru-RU")} ₽
          </p>
          <div className={styles.counterBlock}>
            <span className={styles.counterLabel}>Количество</span>
            <Counter value={quantity} onChange={setQuantity} />
          </div>
        </div>

        <p className={styles.description}>{product.description}</p>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Особенности</h2>
          <ul className={styles.list}>
            {specifications.features.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Параметры</h2>
          <dl className={styles.details}>
            {Object.entries(specifications.details).map(([key, value]) => (
              <div key={key} className={styles.detailRow}>
                <dt className={styles.detailKey}>{key}</dt>
                <dd className={styles.detailValue}>{value}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Варианты</h2>
          <ul className={styles.variants}>
            {specifications.variants.map((v) => (
              <li key={v} className={styles.variant}>
                {v}
              </li>
            ))}
          </ul>
        </section>
      </article>
    </div>
  );
};
