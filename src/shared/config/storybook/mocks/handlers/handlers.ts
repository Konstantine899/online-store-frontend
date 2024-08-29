import { delay, http, HttpResponse } from 'msw';
import { products } from '../mockData';
import { handlerCategory } from './handlerCategory';
import { handlerBrands } from './handlerBrands';

export const handlers = {
  handlerBrands,

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
