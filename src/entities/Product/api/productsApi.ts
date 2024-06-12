import { rtkApi } from '@/shared/api/rtkApi';
import { ProductsSchema } from '../model/types/ProductsSchema';
import { getRouteProducts } from '@/shared/consts/router/publicRouter';
import { ISortOrder } from '@/shared/types/ISortOrder';

interface IProductParams {
  search?: string;
  limit?: number;
  page?: number;
  sort?: ISortOrder;
}

const productsApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    products: build.query<ProductsSchema, IProductParams>({
      query: (args: IProductParams) => {
        const { search, sort, page, limit } = args;
        return {
          url: getRouteProducts(),
          params: { search, sort, page, limit },
        };
      },
    }),
  }),
});

export const useProducts = productsApi.useLazyProductsQuery;
