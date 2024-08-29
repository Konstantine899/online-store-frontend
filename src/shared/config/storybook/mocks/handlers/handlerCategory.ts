import { delay, http, HttpResponse } from 'msw';
import { categories } from '../mockData';

export const handlerCategory = {
  categories: http.get('random%20string/category/categories', async () => {
    await delay(2000);
    return HttpResponse.json(categories, { status: 200 });
  }),
};
