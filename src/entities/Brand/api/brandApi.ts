import { rtkApi } from '@/shared/api/rtkApi';
import {
  getRouteBrand,
  getRouteBrandsByCategory,
} from '@/shared/consts/router/publicRouter';

const brandApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getBrandsByCategory: build.query({
      query: (categoryId) => ({
        url: getRouteBrandsByCategory(categoryId),
      }),
    }),
    getBrand: build.query({
      query: (brandId) => ({
        url: getRouteBrand(brandId),
      }),
    }),
  }),
});

export const useGetBrandsByCategory = brandApi.useGetBrandsByCategoryQuery;
export const useGetBrand = brandApi.useGetBrandQuery;
