import { rtkApi } from '@/shared/api/rtkApi';
import { IRating } from '../model/types/IRatingSchema';
import { getRouteRating } from '@/shared/consts/router/publicRouter';

interface IRatingParams {
  productId: number;
}

const ratingApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    fetchRating: build.query<IRating, IRatingParams>({
      query: ({ productId }) => {
        return { url: getRouteRating(`${productId}`) };
      },
    }),
  }),
});

export const useRating = ratingApi.useLazyFetchRatingQuery;
