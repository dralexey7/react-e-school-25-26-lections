import { type FormEvent, useState } from "react";
import { Link, useNavigate, useParams } from "react-router";
import { mockProducts } from "../../materials/mock";
import type { Product } from "../../types/Product";
import styles from "./ProductFormPage.module.css";

export type ProductFormPageProps = {
  mode: "create" | "edit";
};

function categoriesFromInput(s: string): string[] {
  return s
    .split(",")
    .map((x) => x.trim())
    .filter(Boolean);
}

function linesToArray(s: string): string[] {
  return s
    .split("\n")
    .map((x) => x.trim())
    .filter(Boolean);
}

function detailsFromLines(s: string): Record<string, string> {
  const out: Record<string, string> = {};
  for (const line of linesToArray(s)) {
    const idx = line.indexOf(":");
    if (idx === -1) continue;
    const key = line.slice(0, idx).trim();
    const value = line.slice(idx + 1).trim();
    if (key) out[key] = value;
  }
  return out;
}

function productToFormFields(p: Product) {
  const detailsLines = Object.entries(p.specifications.details).map(
    ([k, v]) => `${k}: ${v}`,
  );
  return {
    name: p.name,
    price: String(p.price),
    description: p.description,
    categories: p.categories.join(", "),
    brand: p.brand,
    rating: String(p.rating),
    features: p.specifications.features.join("\n"),
    variants: p.specifications.variants.join("\n"),
    details: detailsLines.join("\n"),
  };
}

const emptyFields = () => ({
  name: "",
  price: "",
  description: "",
  categories: "",
  brand: "",
  rating: "",
  features: "",
  variants: "",
  details: "",
});

type ProductFormBodyProps = {
  mode: "create" | "edit";
  /** Для режима edit — id из URL (нужен для updateProductThunk). */
  editingProductId?: string;
  /** Для create — undefined; для edit — источник данных см. TODO-05 / стор после TODO-04. */
  initialProduct?: Product;
};

/** Сброс полей при смене `key` снаружи (режим / id товара). */
function ProductFormBody({
  mode,
  editingProductId,
  initialProduct,
}: ProductFormBodyProps) {
  const navigate = useNavigate();
  const [fields, setFields] = useState(() =>
    initialProduct ? productToFormFields(initialProduct) : emptyFields(),
  );

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (mode === "edit" && !editingProductId) {
      return;
    }

    const price = Number(fields.price.replace(",", "."));
    const rating = Number(fields.rating.replace(",", "."));

    const payload: Omit<Product, "id"> = {
      name: fields.name.trim(),
      price: Number.isFinite(price) ? price : 0,
      description: fields.description.trim(),
      categories: categoriesFromInput(fields.categories),
      brand: fields.brand.trim(),
      rating: Number.isFinite(rating) ? rating : 0,
      specifications: {
        features: linesToArray(fields.features),
        details: detailsFromLines(fields.details),
        variants: linesToArray(fields.variants),
      },
    };

    /*
     * TODO-06 (лекция): отправить payload (thunks из TODO-03) и обновить стор (TODO-04).
     * — create: postProductThunk(payload) → navigate(`/products/${newId}`).
     * — edit: updateProductThunk({ id: editingProductId!, ...payload }) → navigate назад или на карточку.
     */
    void payload;
  };

  const title = mode === "create" ? "Новый товар" : "Редактирование";

  return (
    <div className={styles.page}>
      <Link className={styles.backLink} to="/products">
        ← Назад к каталогу
      </Link>

      <div className={styles.surface}>
        <h1 className={styles.title}>{title}</h1>

        <form onSubmit={handleSubmit}>
          <div className={styles.field}>
            <label className={styles.label} htmlFor="pf-name">
              Название
            </label>
            <input
              id="pf-name"
              className={styles.input}
              value={fields.name}
              onChange={(e) =>
                setFields((f) => ({ ...f, name: e.target.value }))
              }
            />
          </div>

          <div className={styles.field}>
            <label className={styles.label} htmlFor="pf-price">
              Цена (число)
            </label>
            <input
              id="pf-price"
              className={styles.input}
              inputMode="decimal"
              value={fields.price}
              onChange={(e) =>
                setFields((f) => ({ ...f, price: e.target.value }))
              }
            />
          </div>

          <div className={styles.field}>
            <label className={styles.label} htmlFor="pf-brand">
              Бренд
            </label>
            <input
              id="pf-brand"
              className={styles.input}
              value={fields.brand}
              onChange={(e) =>
                setFields((f) => ({ ...f, brand: e.target.value }))
              }
            />
          </div>

          <div className={styles.field}>
            <label className={styles.label} htmlFor="pf-rating">
              Рейтинг (число)
            </label>
            <input
              id="pf-rating"
              className={styles.input}
              inputMode="decimal"
              value={fields.rating}
              onChange={(e) =>
                setFields((f) => ({ ...f, rating: e.target.value }))
              }
            />
          </div>

          <div className={styles.field}>
            <label className={styles.label} htmlFor="pf-categories">
              Категории
            </label>
            <input
              id="pf-categories"
              className={styles.input}
              value={fields.categories}
              onChange={(e) =>
                setFields((f) => ({ ...f, categories: e.target.value }))
              }
            />
            <p className={styles.hint}>Через запятую, например: Электроника, Аксессуары</p>
          </div>

          <div className={styles.field}>
            <label className={styles.label} htmlFor="pf-desc">
              Описание
            </label>
            <textarea
              id="pf-desc"
              className={styles.textarea}
              value={fields.description}
              onChange={(e) =>
                setFields((f) => ({ ...f, description: e.target.value }))
              }
            />
          </div>

          <div className={styles.field}>
            <label className={styles.label} htmlFor="pf-features">
              Особенности (список)
            </label>
            <textarea
              id="pf-features"
              className={styles.textarea}
              value={fields.features}
              onChange={(e) =>
                setFields((f) => ({ ...f, features: e.target.value }))
              }
            />
            <p className={styles.hint}>Каждая строка — отдельный пункт</p>
          </div>

          <div className={styles.field}>
            <label className={styles.label} htmlFor="pf-details">
              Параметры (ключ: значение)
            </label>
            <textarea
              id="pf-details"
              className={styles.textarea}
              value={fields.details}
              onChange={(e) =>
                setFields((f) => ({ ...f, details: e.target.value }))
              }
            />
            <p className={styles.hint}>
              Каждая строка вида «display: 6.1 дюйма»
            </p>
          </div>

          <div className={styles.field}>
            <label className={styles.label} htmlFor="pf-variants">
              Варианты
            </label>
            <textarea
              id="pf-variants"
              className={styles.textarea}
              value={fields.variants}
              onChange={(e) =>
                setFields((f) => ({ ...f, variants: e.target.value }))
              }
            />
            <p className={styles.hint}>Каждая строка — отдельный вариант</p>
          </div>

          <div className={styles.actions}>
            <button type="submit" className={styles.submit}>
              Сохранить
            </button>
            <button
              type="button"
              className={styles.cancel}
              onClick={() => navigate("/products")}
            >
              Отмена
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export const ProductFormPage = ({ mode }: ProductFormPageProps) => {
  const { productId } = useParams<{ productId: string }>();

  const productFromMock =
    mode === "edit" && productId
      ? mockProducts.find((p) => p.id === productId)
      : undefined;

  if (mode === "edit" && productId && !productFromMock) {
    return (
      <div className={styles.page}>
        <Link className={styles.backLink} to="/products">
          ← Назад к каталогу
        </Link>
        <div className={styles.surface}>
          <p className={styles.notFound}>
            Товар не найден. После подключения API этот экран должен опираться на
            ответ сервера / Redux.
          </p>
        </div>
      </div>
    );
  }

  // TODO-09 (лекция): когда initialProduct из Redux — расширить key (revision/updatedAt), чтобы форма сбрасывалась после refetch.
  const formKey = `${mode}-${productId ?? "new"}`;

  return (
    <ProductFormBody
      key={formKey}
      mode={mode}
      editingProductId={productId}
      initialProduct={productFromMock}
    />
  );
};
