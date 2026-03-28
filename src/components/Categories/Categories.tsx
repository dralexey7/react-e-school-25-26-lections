import { Category } from "../Category/Category";
import styles from "./styles.module.css";

interface CategoriesProps {
  categories: string[];
  selectedCategory: string | null;
  /** `null` — показать все товары (кнопка «Все»). */
  onCategorySelect: (name: string | null) => void;
}

export const Categories: React.FC<CategoriesProps> = ({
  categories,
  selectedCategory,
  onCategorySelect,
}) => {
  const isAllSelected = !selectedCategory;

  return (
    <div
      id="categories"
      className={styles.container}
      role="toolbar"
      aria-label="Категории"
    >
      <Category
        name="Все"
        isSelected={isAllSelected}
        onClick={() => {
          onCategorySelect(null);
        }}
      />
      {categories.map((category) => (
        <Category
          key={category}
          name={category}
          isSelected={selectedCategory === category}
          onClick={() => {
            onCategorySelect(category);
          }}
        />
      ))}
    </div>
  );
};
