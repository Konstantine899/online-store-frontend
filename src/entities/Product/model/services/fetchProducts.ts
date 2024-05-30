import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkAPIConfig } from '@/app/providers/StoreProvider/config/StateSchema';
import { ProductsSchema } from '../types/ProductsSchema';
import { addQueryParams } from '@/shared/url/addQueryParams';

import { getRouteListProducts } from '@/shared/consts/router/publicRouter';
import {
  selectCurrentPage,
  selectLimit,
  selectSearch,
  selectSortOrder,
} from '../selectors/selectProducts';

export const fetchProducts = createAsyncThunk<
  ProductsSchema,
  void,
  ThunkAPIConfig<string>
>('fetchProducts', async (_, thunkAPI) => {
  const { rejectWithValue, extra, getState } = thunkAPI;
  try {
    const limit = selectLimit(getState());
    const page = selectCurrentPage(getState());
    const search = selectSearch(getState());
    const sort = selectSortOrder(getState());
    addQueryParams({
      search: `${search}`,
    });
    const response = await extra.api.get<ProductsSchema>(
      getRouteListProducts(),
      {
        params: { search, page, limit, sort },
      },
    );
    if (!response.data) {
      throw new Error();
    }
    return response.data;
  } catch (error) {
    return rejectWithValue(`${error}`);
  }
});
