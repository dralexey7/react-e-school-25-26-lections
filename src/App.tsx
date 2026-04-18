import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import { Layout } from "./pages/Layout/Layout";
import { ProductDetailPage } from "./pages/ProductDetailPage/ProductDetailPage";
import { ProductFormPage } from "./pages/ProductFormPage/ProductFormPage";
import { ProductsPage } from "./pages/ProductsPage/ProductsPage";
import { Provider } from "react-redux";
import { store } from "./store/store";

export const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/products" replace />} />
          {/*
            Порядок важен: сначала статический `new`, затем `:productId/edit`, иначе `new`
            попадёт в параметр :productId на странице товара.
          */}
          <Route path="/products" element={<Layout />}>
            <Route index element={<ProductsPage />} />
            <Route path="new" element={<ProductFormPage mode="create" />} />
            <Route path=":productId/edit" element={<ProductFormPage mode="edit" />} />
            <Route path=":productId" element={<ProductDetailPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};
