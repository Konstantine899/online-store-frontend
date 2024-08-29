import { delay, http, HttpResponse } from 'msw';
import { brands, products } from '../mockData';
import { handlerCategory } from './handlerCategory';

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
  handlerCategory,
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
