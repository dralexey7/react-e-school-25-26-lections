import { useState } from "react";
import { Categories } from "../components/Categories/Categories";
import { Products } from "../components/Products/Products";
import { mockProducts } from "../materials/mock";

const data = mockProducts;

const calculateDefaultCategories = () => {
  return Array.from(
    new Set(
      data.reduce((acc, val) => {
        return [...acc, ...val.categories];
      }, [] as string[])
    )
  );
};

export const ProductsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = calculateDefaultCategories();

  const onCategorySelect = (name: string) => {
    setSelectedCategory(name);
  };

  const filteredProducts = data.filter((product) =>
    product.categories.some((category) => category === selectedCategory)
  );

  return (
    <div>
      <Categories categories={categories} onCategorySelect={onCategorySelect} />
      <Products products={filteredProducts} />
    </div>
  );
};
