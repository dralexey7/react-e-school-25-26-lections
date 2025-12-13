import { Category } from "./Category";

interface CategoriesProps {
  categories: string[];
  onCategorySelect: (name: string) => void;
}

export const Categories: React.FC<CategoriesProps> = ({
  categories,
  onCategorySelect,
}) => {
  console.log(categories);
  return (
    <div id="categories">
      {categories.map((category) => (
        <Category
          name={category}
          onClick={() => {
            onCategorySelect(category);
          }}
        />
      ))}
    </div>
  );
};
