import { rtkApi } from '@/shared/api/rtkApi';
import { IProductsSchema, TSortOrder } from '../model/types/IProductsSchema';
import {
  getRouteProducts,
  getRouteProductsByCategory,
  getRouteProductsByCategoryAndBrand,
} from '@/shared/consts/router/publicRouter';

interface IProductParams {
  categoryId?: number;
  brandId?: number;
  search?: string;
  limit?: number;
  page?: number;
  sort?: TSortOrder;
}

const productsApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    products: build.query<IProductsSchema, IProductParams>({
      query: (args: IProductParams) => {
        const { search, sort, page, limit } = args;
        return {
          url: getRouteProducts(),
          params: { search, sort, page, limit },
        };
      },
    }),
    fetchProductsByCategory: build.query<IProductsSchema, IProductParams>({
      query: ({ categoryId, limit, sort, page }) => {
        return {
          url: getRouteProductsByCategory(`${categoryId}`),
          params: { page, limit, sort },
        };
      },
    }),
    fetchProductsByCategoryAndBrand: build.query<
      IProductsSchema,
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
      IProductsSchema,
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
