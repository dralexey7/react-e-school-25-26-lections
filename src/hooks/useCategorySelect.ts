import { useCallback } from "react";
import { useNavigate, useSearchParams } from "react-router";
import { CATEGORY_SEARCH_PARAM } from "../constants/urlSearch";

const PRODUCTS_LIST_PATH = "/products";

export function useCategorySelect() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const selectedCategory = searchParams.get(CATEGORY_SEARCH_PARAM);

  const onCategorySelect = useCallback(
    (name: string | null) => {
      const next = new URLSearchParams(searchParams);
      if (name === null) {
        next.delete(CATEGORY_SEARCH_PARAM);
      } else {
        next.set(CATEGORY_SEARCH_PARAM, name);
      }
      const qs = next.toString();
      navigate(
        { pathname: PRODUCTS_LIST_PATH, search: qs ? `?${qs}` : "" },
        { replace: true },
      );
    },
    [navigate, searchParams],
  );

  return { selectedCategory, onCategorySelect };
}
