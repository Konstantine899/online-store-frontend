import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkAPIConfig } from '@/app/providers/StoreProvider/config/StateSchema';
import { ProductsPageSchema } from '@/pages/ProductsPage';

import { addQueryParams } from '@/shared/url/addQueryParams';
import {
  getCurrentPage,
  getLimit,
} from '@/entities/Paginate/model/selectors/getPaginateState';

export const fetchProductsListPage = createAsyncThunk<
  ProductsPageSchema,
  void,
  ThunkAPIConfig<string>
>('FetchProductsListPage', async (_, thunkAPI) => {
  const { rejectWithValue, extra, getState } = thunkAPI;
  try {
    const limit = getLimit(getState());
    const page = getCurrentPage(getState());
    addQueryParams({ page: `${page}`, limit: `${limit}` });
    const response = await extra.api.get('/product/all', {
      params: { page, limit },
    });
    if (!response.data) {
      throw new Error();
    }
    return response.data;
  } catch (error) {
    return rejectWithValue(error);
  }
});
