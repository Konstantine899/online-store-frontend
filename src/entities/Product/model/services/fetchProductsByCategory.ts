import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkAPIConfig } from '@/app/providers/StoreProvider/config/StateSchema';
import { ProductsSchema } from '../types/ProductsSchema';
import { getRouteListProductsByCategory } from '@/shared/consts/router/publicRouter';
import {
  selectCurrentPage,
  selectLimit,
  selectSortOrder,
} from '../../model/selectors/selectProducts';

interface FetchProductsByCategoryProps {
  categoryId: number;
}

export const fetchProductsByCategory = createAsyncThunk<
  ProductsSchema,
  FetchProductsByCategoryProps,
  ThunkAPIConfig<string>
>('fetchProductsByCategory', async ({ categoryId }, thunkAPI) => {
  const { rejectWithValue, extra, getState } = thunkAPI;
  try {
    const limit = selectLimit(getState());
    const page = selectCurrentPage(getState());
    const sort = selectSortOrder(getState());

    const response = await extra.api.get<ProductsSchema>(
      getRouteListProductsByCategory(`${categoryId}`),
      {
        params: {
          limit,
          page,
          sort,
        },
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
