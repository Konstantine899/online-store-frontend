import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkAPIConfig } from '@/app/providers/StoreProvider/config/StateSchema';
import { ProductsSchema } from '../types/ProductsSchema';
import { getRouteListProductsByCategory } from '@/shared/consts/router/publicRouter';
import {
  selectProductsByCategoryCurrentPage,
  selectProductsByCategoryLimit,
  selectProductsByCategorySort,
} from '../selectors/selectProductsByCategoryState';

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
    const limit = selectProductsByCategoryLimit(getState());
    const page = selectProductsByCategoryCurrentPage(getState());
    const sort = selectProductsByCategorySort(getState());

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
