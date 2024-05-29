import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkAPIConfig } from '@/app/providers/StoreProvider/config/StateSchema';
import { getRouteListProductsByBrandAndByCategory } from '@/shared/consts/router/publicRouter';
import { selectCurrentPage, selectLimit } from '@/entities/Paginate';
import { addQueryParams } from '@/shared/url/addQueryParams';
import { ProductsSchema } from '../types/ProductsSchema';
import { selectSortOrder } from '../selectors/selectProducts';

interface FetchProductsByBrandAndCategoryProps {
  brandId: number;
  categoryId: number;
}

export const FetchProductsByBrandAndCategory = createAsyncThunk<
  ProductsSchema,
  FetchProductsByBrandAndCategoryProps,
  ThunkAPIConfig<string>
>(
  'FetchProductsByBrandAndCategory',
  async ({ brandId, categoryId }, thunkAPI) => {
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
        getRouteListProductsByBrandAndByCategory(`${brandId}`, `${categoryId}`),
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
  },
);
