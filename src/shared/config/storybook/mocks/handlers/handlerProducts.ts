import { delay, http, HttpResponse } from 'msw';
import { products } from '../mockData';

export const handlerProducts = {
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

  popularProductsSuccess: http.get(
    '/random%20string/product/all',
    async ({ request }) => {
      const url = new URL(request.url);
      const limit = url.searchParams.get('limit');
      return HttpResponse.json(products, { status: 200 });
    },
  ),
};
