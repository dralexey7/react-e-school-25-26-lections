import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate, useParams } from "react-router";
import { Counter } from "../../components/Counter/Counter";

import { selectProductCountById } from "../../store/selectors/selectProductCountById";
import { addToBasket, deleteFromBasket } from "../../store/slices/basketSlice";
import type { AppDispatch, RootState } from "../../store/store";
import styles from "./ProductDetailPage.module.css";
import { ProductNotFound } from "./ProductNotFound";
import { selectProductById } from "../../store/selectors/selectProducById";
import { useGetProductByIdQuery } from "../../store/services/product";
import { deleteProductThunk } from "../../api/deleteProductThunk";

export const ProductDetailPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { productId } = useParams<{ productId: string }>();
  const location = useLocation();
  const listSearch = location.search;



  const navigate = useNavigate();

  const { data: product, isLoading, isError } = useGetProductByIdQuery({ id: productId! });

  const quantity = useSelector((state: RootState) =>
    productId ? selectProductCountById(state, productId) : 0,
  );

  if (isError) {
    return <div>Error</div>
  }
  if (isLoading) {
    return <div>Loading</div>
  }

  // TODO-RTKQ-04 (livecoding): получать товар через useGetProductByIdQuery(productId).
  // Тогда можно убрать зависимость от products slice/selectors в этой странице.

  if (!product) {
    return <ProductNotFound catalogSearch={listSearch} />;
  }

  if (!product) {
    return <ProductNotFound catalogSearch={listSearch} />;
  }

  const { specifications } = product;

  const handleIncrease = () => {
    dispatch(addToBasket(product.id));
  };

  const handleDecrease = () => {
    dispatch(deleteFromBasket(product.id));
  };

  const handleDeleteProduct = () => {
    /*
     * TODO-RTKQ-05 (livecoding):
     * заменить deleteProductThunk на useDeleteProductMutation.
     * После await deleteProduct(id).unwrap() выполнить navigate назад к каталогу.
     */

    const confirmed = window.confirm("Вы уверены, что хотите удалить этот товар?");
    if (!confirmed) {
      return;
    }

    dispatch(deleteProductThunk(product.id)).unwrap();
    navigate({ pathname: "/products"});
  };

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
          <div className={styles.toolbar}>
            <Link
              className={styles.editLink}
              to={{ pathname: `/products/${product.id}/edit`, search: listSearch }}
            >
              Редактировать
            </Link>
            <button
              type="button"
              className={styles.deleteButton}
              onClick={handleDeleteProduct}
            >
              Удалить
            </button>
          </div>
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
            <Counter
              value={quantity}
              increase={handleIncrease}
              decrease={handleDecrease}
            />
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
