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

  // TODO(лекция): при необходимости повторно дергать getProductsThunk после мутаций (navigate с key / dispatch из формы).
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
