import { rtkApi } from '@/shared/api/rtkApi';
import { ProductsSchema } from '../model/types/ProductsSchema';
import { getRouteProductsByCategoryAndBrand } from '@/shared/consts/router/publicRouter';
import { ISortOrder } from '@/shared/types/ISortOrder';

interface IProductsByCategoryAndBrandParams {
  categoryId: number;
  brandId: number;
  page?: number;
  limit?: number;
  sort?: ISortOrder;
}

const productsByCategoryAndBrandApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    fetchProductsByCategoryAndBrand: build.query<
      ProductsSchema,
      IProductsByCategoryAndBrandParams
    >({
      query: (arg) => {
        const { categoryId, brandId, page, limit, sort } = arg;
        return {
          url: getRouteProductsByCategoryAndBrand(
            `${brandId}`,
            `${categoryId}`,
          ),
          params: { page, limit, sort },
        };
      },
    }),
  }),
});

export const useProductsByCategoryAndBrand =
  productsByCategoryAndBrandApi.useLazyFetchProductsByCategoryAndBrandQuery;
