import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkAPIConfig } from '@/app/providers/StoreProvider/config/StateSchema';
import { ProductsSchema } from '../types/ProductsSchema';
import { getCurrentPage, getLimit } from '@/entities/Paginate';
import { addQueryParams } from '@/shared/url/addQueryParams';
import { getRouteListProductsByCategory } from '@/shared/consts/router/publicRouter';
import {
  getSearchSelector,
  getSortOrderSelector,
} from '../selectors/getProductsSelector';

interface FetchProductsByCategoryProps {
  categoryId: number;
}

export const FetchProductsByCategory = createAsyncThunk<
  ProductsSchema,
  FetchProductsByCategoryProps,
  ThunkAPIConfig<string>
>('FetchProductsByCategory', async ({ categoryId }, thunkAPI) => {
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
      getRouteListProductsByCategory(`${categoryId}`),
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
});
