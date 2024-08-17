import { http, HttpResponse, delay } from 'msw';
import { brands, categories } from './mockData';

export const handlers = {
  brandsListByCategoryPending: http.get(
    'http://localhost:6006/random%20string/brand/brand_list_by_category/undefined',
    async () => {
      await delay('infinite');
    },
  ),
  brandsListByCategorySuccess: http.get(
    'http://localhost:6006/random%20string/brand/brand_list_by_category/undefined',
    async () => {
      return HttpResponse.json(brands, { status: 200 });
    },
  ),
  categories: http.get(
    'http://localhost:6006/random%20string/category/categories',
    async () => {
      await delay(2000);
      return HttpResponse.json(categories, { status: 200 });
    },
  ),
};
