import { http, HttpResponse, delay } from 'msw';
import { brands, categories, products } from './mockData';

export const handlers = {
  brandsListByCategoryPending: http.get(
    'random%20string/brand/brand_list_by_category/undefined',
    async () => {
      await delay('infinite');
    },
  ),
  brandsListByCategorySuccess: http.get(
    'random%20string/brand/brand_list_by_category/undefined',
    async () => {
      return HttpResponse.json(brands, { status: 200 });
    },
  ),
  categories: http.get('random%20string/category/categories', async () => {
    await delay(2000);
    return HttpResponse.json(categories, { status: 200 });
  }),
  productsAllByCategoryIdPending: http.get(
    '/random%20string/product/all/categoryId/0',
    async () => {
      await delay('infinite');
    },
  ),

  productsAllByCategoryIdSuccess: http.get(
    '/random%20string/product/all/categoryId/0',
    async () => {
      return HttpResponse.json(products, { status: 200 });
    },
  ),
};
