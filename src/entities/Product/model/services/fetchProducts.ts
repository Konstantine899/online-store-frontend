import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkAPIConfig } from '@/app/providers/StoreProvider/config/StateSchema';
import { ProductsSchema } from '../types/ProductsSchema';
import { addQueryParams } from '@/shared/url/addQueryParams';

import { getRouteProducts } from '@/shared/consts/router/publicRouter';
import {
  selectProductsCurrentPage,
  selectProductsLimit,
  selectProductsSearch,
  selectProductsSortOrder,
} from '../selectors/selectProducts';

export const fetchProducts = createAsyncThunk<
  ProductsSchema,
  void,
  ThunkAPIConfig<string>
>('fetchProducts', async (_, thunkAPI) => {
  const { rejectWithValue, extra, getState } = thunkAPI;
  try {
    const limit = selectProductsLimit(getState());
    const page = selectProductsCurrentPage(getState());
    const search = selectProductsSearch(getState());
    const sort = selectProductsSortOrder(getState());
    addQueryParams({
      search: `${search}`,
    });
    const response = await extra.api.get<ProductsSchema>(getRouteProducts(), {
      params: { search, page, limit, sort },
    });
    if (!response.data) {
      throw new Error();
    }
    return response.data;
  } catch (error) {
    return rejectWithValue(`${error}`);
  }
});
