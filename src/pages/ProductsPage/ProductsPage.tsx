import { useEffect, useMemo } from "react";
import { useSearchParams } from "react-router";
import { Products } from "../../components/Products/Products";
import { CATEGORY_SEARCH_PARAM } from "../../constants/urlSearch";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch } from "../../store/store";
import { getProductsThunk } from "../../api/getProductsThunk";
import { selectProducts } from "../../store/selectors/selectProducts";
import { selectProductsStatus } from "../../store/selectors/selectProductsStatus";

export const ProductsPage = () => {
  const dispatch = useDispatch<AppDispatch>();

  /*
   * TODO-RTKQ-03 (livecoding): заменить блок с dispatch + useSelector на RTK Query hooks:
   * 1) useGetProductsQuery({ category: selectedCategory ?? undefined }) для обычного списка.
   * 2) хук для infinite endpoint-а (имя возьмется из createApi автоматически).
   * 3) собрать flat-массив из pages и добавить кнопку "Загрузить еще" (fetchNextPage).
   */
  useEffect(() => {
    dispatch(getProductsThunk());
  }, [dispatch]);

  const status = useSelector(selectProductsStatus);
  const isLoading = status === "idle" || status === "pending";

  const products = useSelector(selectProducts);

  const [searchParams] = useSearchParams();
  const selectedCategory = searchParams.get(CATEGORY_SEARCH_PARAM);

  const filteredProducts = useMemo(() => {
    if (!selectedCategory) {
      return products;
    }
    return products.filter((product) =>
      product.categories.some((c) => c === selectedCategory),
    );
  }, [products, selectedCategory]);

  if (isLoading) {
    return "Загрузка";
  }

  if (status === "rejected") {
    return "Failed to load products";
  }

  return <Products products={filteredProducts} />;
};
