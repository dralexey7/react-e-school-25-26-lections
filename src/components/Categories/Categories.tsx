import { Category } from "../Category";
import styles from "./styles.module.css";

interface CategoriesProps {
  categories: string[];
  onCategorySelect: (name: string) => void;
}

export const Categories: React.FC<CategoriesProps> = ({
  categories,
  onCategorySelect,
}) => {
  return (
    <div id="categories" className={styles.container}>
      {categories.map((category) => (
        <Category
          key={category}
          name={category}
          onClick={() => {
            onCategorySelect(category);
          }}
        />
      ))}
    </div>
  );
};
