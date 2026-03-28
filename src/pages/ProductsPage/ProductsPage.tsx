import { useMemo } from "react";
import { useSearchParams } from "react-router";
import { Products } from "../../components/Products/Products";
import { CATEGORY_SEARCH_PARAM } from "../../constants/urlSearch";
import { mockProducts } from "../../materials/mock";

export const ProductsPage = () => {
  const [searchParams] = useSearchParams();
  const selectedCategory = searchParams.get(CATEGORY_SEARCH_PARAM);

  const filteredProducts = useMemo(() => {
    if (!selectedCategory) {
      return mockProducts;
    }
    return mockProducts.filter((product) =>
      product.categories.some((c) => c === selectedCategory),
    );
  }, [selectedCategory]);

  return <Products products={filteredProducts} />;
};
