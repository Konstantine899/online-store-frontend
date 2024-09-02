import { http, HttpResponse } from 'msw';

export const handlerVotes = {
  voteOne: http.get('/random%20string/rating/product/NaN', async () => {
    return HttpResponse.json({
      rating: 5,
      ratingsSum: 5,
      votes: 1,
    });
  }),

  votesOneHundred: http.get('/random%20string/rating/product/NaN', async () => {
    return HttpResponse.json({
      rating: 5,
      ratingsSum: 5,
      votes: 100,
    });
  }),

  votesThousand: http.get('/random%20string/rating/product/NaN', async () => {
    return HttpResponse.json({
      rating: 5,
      ratingsSum: 5,
      votes: 1000,
    });
  }),

  votesTenThousand: http.get(
    '/random%20string/rating/product/NaN',
    async () => {
      return HttpResponse.json({
        rating: 5,
        ratingsSum: 5,
        votes: 10000,
      });
    },
  ),

  votesOneHundredThousand: http.get(
    '/random%20string/rating/product/NaN',
    async () => {
      return HttpResponse.json({
        rating: 5,
        ratingsSum: 5,
        votes: 100000,
      });
    },
  ),

  votesMillion: http.get('/random%20string/rating/product/NaN', async () => {
    return HttpResponse.json({
      rating: 5,
      ratingsSum: 5,
      votes: 1000000,
    });
  }),

  votesTenMillion: http.get('/random%20string/rating/product/NaN', async () => {
    return HttpResponse.json({
      rating: 5,
      ratingsSum: 5,
      votes: 10000000,
    });
  }),

  votesOneHundredMillion: http.get(
    '/random%20string/rating/product/NaN',
    async () => {
      return HttpResponse.json({
        rating: 5,
        ratingsSum: 5,
        votes: 100000000,
      });
    },
  ),
};
