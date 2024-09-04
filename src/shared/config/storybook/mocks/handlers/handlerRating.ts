import { http, HttpResponse } from 'msw';
import { mockRating } from '../mockRating';

export const handlerRating = {
  getRating: http.get('/random%20string/rating/product/NaN', async () => {
    return HttpResponse.json(mockRating);
  }),
};
