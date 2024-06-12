import { rtkApi } from '@/shared/api/rtkApi';
import { ProductsSchema } from '../model/types/ProductsSchema';
import {
  getRouteProducts,
  getRouteProductsByCategory,
  getRouteProductsByCategoryAndBrand,
} from '@/shared/consts/router/publicRouter';
import { ISortOrder } from '@/shared/types/ISortOrder';

interface IProductParams {
  categoryId?: number;
  brandId?: number;
  search?: string;
  limit?: number;
  page?: number;
  sort?: ISortOrder;
}

const productsApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    products: build.query<ProductsSchema, IProductParams>({
      query: (args: IProductParams) => {
        const { search, sort, page, limit } = args;
        return {
          url: getRouteProducts(),
          params: { search, sort, page, limit },
        };
      },
    }),
    fetchProductsByCategory: build.query<ProductsSchema, IProductParams>({
      query: ({ categoryId, limit, sort, page }) => {
        return {
          url: getRouteProductsByCategory(`${categoryId}`),
          params: { page, limit, sort },
        };
      },
    }),
    fetchProductsByCategoryAndBrand: build.query<
      ProductsSchema,
      IProductParams
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
    fetchProductsByCategoryCarousel: build.query<
      ProductsSchema,
      IProductParams
    >({
      query: ({ categoryId }) => {
        return {
          url: getRouteProductsByCategory(`${categoryId}`),
          params: { limit: 20 },
        };
      },
    }),
  }),
});

export const useProducts = productsApi.useLazyProductsQuery;

export const useProductsByCategory =
  productsApi.useLazyFetchProductsByCategoryQuery;

export const useProductsByCategoryAndBrand =
  productsApi.useLazyFetchProductsByCategoryAndBrandQuery;

export const useFetchProductsByCategoryCarousel =
  productsApi.useLazyFetchProductsByCategoryCarouselQuery;
