import { Categories } from "../components/Categories";
import { mockProducts } from "../materials/mock";

const data = mockProducts;

export const ProductsPage = () => {
  const categories = Array.from(
    new Set(
      data.reduce((acc, val) => {
        return [...acc, ...val.categories];
      }, [] as string[])
    )
  );

  const onCategorySelect = (name: string) => {
    console.log(name);
  };

  return (
    <div>
      <Categories categories={categories} onCategorySelect={onCategorySelect} />
      Products
    </div>
  );
};
