import { rtkApi } from '@/shared/api/rtkApi';
import { getRouteProductsByCategory } from '@/shared/consts/router/publicRouter';
import { ProductsSchema } from '../model/types/ProductsSchema';
import { ISortOrder } from '@/shared/types/ISortOrder';

interface IProductsByCategoryParams {
  categoryId: number;
  page?: number;
  limit?: number;
  sort?: ISortOrder;
}

const productsByCategoryApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    fetchProductsByCategory: build.query<
      ProductsSchema,
      IProductsByCategoryParams
    >({
      query: ({ categoryId, limit, sort, page }) => {
        return {
          url: getRouteProductsByCategory(`${categoryId}`),
          params: { page, limit, sort },
        };
      },
    }),
  }),
});

export const useProductsByCategory =
  productsByCategoryApi.useLazyFetchProductsByCategoryQuery;
