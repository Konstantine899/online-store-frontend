import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkAPIConfig } from '@/app/providers/StoreProvider/config/StateSchema';
import { ProductsSchema } from '../../model/types/ProductsSchema';
import { addQueryParams } from '@/shared/url/addQueryParams';
import {
  selectProductsCurrentPage,
  selectProductsLimit,
  selectProductsSearch,
  selectProductsSortOrder,
} from '../selectors/selectProducts';

interface FetchProductsByBrandProps {
  brandId: number;
}

export const fetchProductsByBrand = createAsyncThunk<
  ProductsSchema,
  FetchProductsByBrandProps,
  ThunkAPIConfig<string>
>('fetchProductsByBrand', async ({ brandId }, thunkAPI) => {
  const { rejectWithValue, extra, getState } = thunkAPI;
  try {
    const limit = selectProductsLimit(getState());
    const page = selectProductsCurrentPage(getState());
    const search = selectProductsSearch(getState());
    const sort = selectProductsSortOrder(getState());
    addQueryParams({
      search: `${search}`,
      page: `${page}`,
      limit: `${limit}`,
      sort: `${sort}`,
    });
    const response = await extra.api.get<ProductsSchema>(
      `/product/all/brandId/${brandId}`,
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
    return rejectWithValue(`${error}`);
  }
});
