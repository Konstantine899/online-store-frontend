import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkAPIConfig } from '@/app/providers/StoreProvider/config/StateSchema';
import { ProductsSchema } from '../types/ProductsSchema';
import { addQueryParams } from '@/shared/url/addQueryParams';
import { getRouteListProductsByCategory } from '@/shared/consts/router/publicRouter';
import { selectSortOrder } from '../../model/selectors/selectProducts';
import { selectCurrentPage, selectLimit } from '@/entities/Paginate';

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
    const limit = selectLimit(getState());
    const page = selectCurrentPage(getState());
    const sort = selectSortOrder(getState());
    addQueryParams({
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
