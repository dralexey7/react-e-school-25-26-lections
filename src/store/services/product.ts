import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { Product } from "../../types/Product";
/*
 * TODO-RTKQ-00 (livecoding): создать здесь productsApi через createApi/fetchBaseQuery.
 * TODO-RTKQ-10 (livecoding): вынести baseUrl в .env (VITE_API_BASE_URL)
 * и читать через import.meta.env.VITE_API_BASE_URL с fallback на http://localhost:3006.
 *
 * Endpoint-ы, которые будем реализовывать:
 * 1) getProducts (query)
 *    - GET /products
 *    - аргументы: category? (опционально), для фильтрации на клиенте/сервере.
 *
 * 2) getProductById (query)
 *    - GET /products/:id
 *
 * 3) createProduct (mutation)
 *    - POST /products
 *
 * 4) updateProduct (mutation)
 *    - PATCH /products/:id
 *
 * 5) deleteProduct (mutation)
 *    - DELETE /products/:id
 *
 * 6) getProductsInfinite (infiniteQuery)
 *    - GET /products?cursor=...&limit=...
 *    - ожидаемый ответ: { items, nextCursor, hasMore, total }.
 */


export const productApi = createApi({
    reducerPath: "productApi",
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3006'}),
    tagTypes: ['Products'],
    endpoints: (builder) => ({
        getProducts: builder.query<Product[], { category?: string }>({
            query: ({category}) => {
                if (category) {
                    return `/products?category=${category}`;
                }
                return '/products';
            },
            providesTags: ['Products']
        }),
        getProductById: builder.query<Product, { id: string }>({
            query: ({id}) => `/products/${id}`,
            providesTags: (result) =>
                result
                  ? [
                      { type: 'Products' as const, id: result.id },
                    ]
                  : [{ type: 'Products', id: 'LIST' }],
        }),
        updateProduct: builder.mutation<Partial<Product>, Product>({
            query: (postData) => ({
                method: 'PATCH',
                url: `/products/${postData.id}`,
                body: postData,
            }),
            invalidatesTags: (result, error, { id }) => [{ type: 'Products', id }],
        }),
        addProduct: builder.mutation<Product, Omit<Product, 'id'>>({
            query: (postData) => ({
                method: 'POST',
                url: `/products/`,
                body: postData,
            }),
            invalidatesTags: ['Products'],
        })
    })
});

export const {
    useGetProductsQuery,
    useGetProductByIdQuery,
    useUpdateProductMutation,
    useAddProductMutation,
} = productApi;