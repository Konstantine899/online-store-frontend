import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkAPIConfig } from '@/app/providers/StoreProvider/config/StateSchema';
import { ProductsSchema } from '../../model/types/ProductsSchema';
import { getCurrentPage, getLimit } from '@/entities/Paginate';
import { addQueryParams } from '@/shared/url/addQueryParams';
import { getSearchSelector, getSortOrderSelector } from '@/entities/Product';

interface FetchProductsByBrandProps {
  brandId: number;
}

export const FetchProductsByBrand = createAsyncThunk<
  ProductsSchema,
  FetchProductsByBrandProps,
  ThunkAPIConfig<string>
>('FetchProductsByBrand', async ({ brandId }, thunkAPI) => {
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
    return rejectWithValue(error.response.data);
  }
});
