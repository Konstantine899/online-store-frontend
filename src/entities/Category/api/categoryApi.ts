import { rtkApi } from '@/shared/api/rtkApi';
import {
  getRouteCategories,
  getRouteCategory,
} from '@/shared/consts/router/publicRouter';

const categoryApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    categories: build.query({
      query: () => ({
        url: getRouteCategories(),
      }),
    }),
    category: build.query({
      query: (categoryId) => ({
        url: getRouteCategory(categoryId),
      }),
    }),
  }),
});

export const useCategories = categoryApi.useCategoriesQuery;
export const useCategory = categoryApi.useCategoryQuery;
