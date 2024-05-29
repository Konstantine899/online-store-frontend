import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkAPIConfig } from '@/app/providers/StoreProvider/config/StateSchema';
import { ProductsSchema } from '../../model/types/ProductsSchema';
import { addQueryParams } from '@/shared/url/addQueryParams';
import { selectSearch, selectSortOrder } from '../selectors/selectProducts';
import { selectCurrentPage, selectLimit } from '@/entities/Paginate';

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
    const limit = selectLimit(getState());
    const page = selectCurrentPage(getState());
    const search = selectSearch(getState());
    const sort = selectSortOrder(getState());
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
