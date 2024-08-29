import { delay, http, HttpResponse } from 'msw';
import { brands } from '../mockData';

export const handlerBrands = {
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
};
