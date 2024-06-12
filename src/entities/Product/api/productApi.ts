import { rtkApi } from '@/shared/api/rtkApi';
import { IProduct } from '../model/types/IProduct';
import { getRouteProduct } from '@/shared/consts/router/publicRouter';

interface ProductParams {
  productId: number;
}

const productApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    fetchProduct: build.query<IProduct, ProductParams>({
      query: ({ productId }) => {
        return {
          url: getRouteProduct(`${productId}`),
        };
      },
    }),
  }),
});

export const useProduct = productApi.useLazyFetchProductQuery;
