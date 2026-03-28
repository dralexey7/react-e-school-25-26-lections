import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import { Layout } from "./pages/Layout/Layout";
import { ProductDetailPage } from "./pages/ProductDetailPage/ProductDetailPage";
import { ProductsPage } from "./pages/ProductsPage/ProductsPage";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/products" replace />} />
        <Route path="/products" element={<Layout />}>
          <Route index element={<ProductsPage />} />
          <Route path=":productId" element={<ProductDetailPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
