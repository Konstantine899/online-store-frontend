import { rtkApi } from '@/shared/api/rtkApi';
import {
  getRouteCategories,
  getRouteCategory,
} from '@/shared/consts/router/publicRouter';
import { ICategory } from '../model/types/ICategory';

const categoryApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    categories: build.query<ICategory[], void>({
      query: () => ({
        url: getRouteCategories(),
      }),
    }),
    category: build.query<ICategory, string>({
      query: (categoryId) => ({
        url: getRouteCategory(categoryId),
      }),
    }),
  }),
});

export const useCategories = categoryApi.useCategoriesQuery;
export const useCategory = categoryApi.useCategoryQuery;
