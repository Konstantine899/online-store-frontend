import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkAPIConfig } from '@/app/providers/StoreProvider/config/StateSchema';
import { getRouteListProductsByBrandAndByCategory } from '@/shared/consts/router/publicRouter';
import {
  getSearchSelector,
  getSortOrderSelector,
} from '../selectors/getProductsSelector';
import { getCurrentPage, getLimit } from '@/entities/Paginate';
import { addQueryParams } from '@/shared/url/addQueryParams';
import { ProductsSchema } from '../types/ProductsSchema';

interface FetchProductsByBrandAndCategoryProps {
  brandId: number;
  categoryId: number;
}

export const FetchProductsByBrandAndCategory = createAsyncThunk<
  ProductsSchema,
  FetchProductsByBrandAndCategoryProps,
  ThunkAPIConfig<string>
>(
  'FetchProductsByBrandAndCategory',
  async ({ brandId, categoryId }, thunkAPI) => {
    const { rejectWithValue, extra, getState } = thunkAPI;
    try {
      const limit = getLimit(getState());
      const page = getCurrentPage(getState());
      const search = getSearchSelector(getState());
      const sort = getSortOrderSelector(getState());
      addQueryParams({
        search: `${search}`,
        page: `${page}`,
        limit: `${limit}`,
        sort: `${sort}`,
      });
      const response = await extra.api.get<ProductsSchema>(
        getRouteListProductsByBrandAndByCategory(`${brandId}`, `${categoryId}`),
        {
          params: {
            limit,
            page,
            search,
            sort,
          },
        },
      );
      if (!response.data) {
        throw new Error();
      }
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);
