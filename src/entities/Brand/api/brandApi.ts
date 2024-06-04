import { rtkApi } from '@/shared/api/rtkApi';
import {
  getRouteBrand,
  getRouteBrandsByCategory,
} from '@/shared/consts/router/publicRouter';
import { IBrand } from '../model/types/IBrand';

const brandApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getBrandsByCategory: build.query<IBrand[], string>({
      query: (categoryId) => ({
        url: getRouteBrandsByCategory(categoryId),
      }),
    }),
    getBrand: build.query<IBrand, string>({
      query: (brandId) => ({
        url: getRouteBrand(brandId),
      }),
    }),
  }),
});

export const useGetBrandsByCategory = brandApi.useGetBrandsByCategoryQuery;
export const useGetBrand = brandApi.useGetBrandQuery;
