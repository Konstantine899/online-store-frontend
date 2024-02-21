import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkAPIConfig } from '@/app/providers/StoreProvider/config/StateSchema';
import { ProductsSchema } from '../types/ProductsSchema';
import { addQueryParams } from '@/shared/url/addQueryParams';
import { getCurrentPage, getLimit } from '@/entities/Paginate';
import { getSearchSelector, getSortOrderSelector } from '@/entities/Product';

export const FetchProducts = createAsyncThunk<
  ProductsSchema,
  void,
  ThunkAPIConfig<string>
>('FetchProducts', async (_, thunkAPI) => {
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
    const response = await extra.api.get<ProductsSchema>('/product/all', {
      params: { search, page, limit, sort },
    });
    if (!response.data) {
      throw new Error();
    }
    return response.data;
  } catch (error) {
    return rejectWithValue(error);
  }
});
