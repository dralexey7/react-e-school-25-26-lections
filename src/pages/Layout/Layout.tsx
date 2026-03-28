import { Outlet } from "react-router";
import { Categories } from "../../components/Categories/Categories";
import { useCategorySelect } from "../../hooks/useCategorySelect";
import { mockProducts } from "../../materials/mock";
import { getCategoriesFromProducts } from "../../utils/categoriesFromProducts";
import styles from "./Layout.module.css";
import { useSelector } from "react-redux";
import { selectTotalPrice } from "../../store/selectors/selectTotalPrice";

export const Layout = () => {
  const { selectedCategory, onCategorySelect } = useCategorySelect();
  const categories = getCategoriesFromProducts(mockProducts);
  const totalPrice = useSelector(selectTotalPrice);

  return (
    <div className={styles.root}>
      <header className={styles.header}>
        <h1 className={styles.title}>Каталог</h1>
      </header>
      <div style={{ display: "flex" }}>
        <Categories
          categories={categories}
          selectedCategory={selectedCategory}
          onCategorySelect={onCategorySelect}
        />
        {totalPrice}
      </div>
      <main className={styles.main}>
        <Outlet />
      </main>
    </div>
  );
};
