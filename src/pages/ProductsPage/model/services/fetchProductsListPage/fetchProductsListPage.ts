import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkAPIConfig } from '@/app/providers/StoreProvider/config/StateSchema';
import { ProductsPageSchema } from '../../types/ProductsPageSchema';

import { addQueryParams } from '@/shared/url/addQueryParams';
import {
  getCurrentPage,
  getLimit,
} from '@/entities/Paginate/model/selectors/getPaginateState';
import { getSearchSelector } from '@/features/Filters/model/selectors/getFilters';

export const fetchProductsListPage = createAsyncThunk<
  ProductsPageSchema,
  void,
  ThunkAPIConfig<string>
>('FetchProductsListPage', async (_, thunkAPI) => {
  const { rejectWithValue, extra, getState } = thunkAPI;
  try {
    const limit = getLimit(getState());
    const page = getCurrentPage(getState());
    const search = getSearchSelector(getState());
    addQueryParams({ search: `${search}`, page: `${page}`, limit: `${limit}` });
    const response = await extra.api.get('/product/all', {
      params: { search, page, limit },
    });
    if (!response.data) {
      throw new Error();
    }
    return response.data;
  } catch (error) {
    return rejectWithValue(error);
  }
});
