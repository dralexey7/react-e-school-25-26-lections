import { Outlet } from "react-router";
import { Categories } from "../../components/Categories/Categories";
import { useCategorySelect } from "../../hooks/useCategorySelect";
import { mockProducts } from "../../materials/mock";
import { getCategoriesFromProducts } from "../../utils/categoriesFromProducts";
import styles from "./Layout.module.css";

export const Layout = () => {
  const { selectedCategory, onCategorySelect } = useCategorySelect();
  const categories = getCategoriesFromProducts(mockProducts);

  return (
    <div className={styles.root}>
      <header className={styles.header}>
        <h1 className={styles.title}>Каталог</h1>
      </header>
      <Categories
        categories={categories}
        selectedCategory={selectedCategory}
        onCategorySelect={onCategorySelect}
      />
      <main className={styles.main}>
        <Outlet />
      </main>
    </div>
  );
};
