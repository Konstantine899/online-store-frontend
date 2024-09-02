import { http, HttpResponse } from 'msw';

export const handlerRating = {
  rating: http.get('/random%20string/rating/product/NaN', async () => {
    return HttpResponse.json({
      rating: 5,
      ratingsSum: 5,
      votes: 1,
    });
  }),
};
