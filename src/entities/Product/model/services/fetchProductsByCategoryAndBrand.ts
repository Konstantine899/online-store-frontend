import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkAPIConfig } from '@/app/providers/StoreProvider/config/StateSchema';
import { getRouteProductsByBrandAndByCategory } from '@/shared/consts/router/publicRouter';
import { ProductsSchema } from '../types/ProductsSchema';
import {
  selectProductsByCategoryAndBrandLimit,
  selectProductsByCategoryAndBrandCurrentPage,
  selectProductsByCategoryAndBrandSort,
} from '../selectors/selectProductsByCategoryAndBrand';

interface FetchProductsByBrandAndCategoryProps {
  brandId: number;
  categoryId: number;
}

export const fetchProductsByCategoryAndBrand = createAsyncThunk<
  ProductsSchema,
  FetchProductsByBrandAndCategoryProps,
  ThunkAPIConfig<string>
>(
  'fetchProductsByCategoryAndBrand',
  async ({ brandId, categoryId }, thunkAPI) => {
    const { rejectWithValue, extra, getState } = thunkAPI;
    try {
      const limit = selectProductsByCategoryAndBrandLimit(getState());
      const page = selectProductsByCategoryAndBrandCurrentPage(getState());
      const sort = selectProductsByCategoryAndBrandSort(getState());

      const response = await extra.api.get<ProductsSchema>(
        getRouteProductsByBrandAndByCategory(`${brandId}`, `${categoryId}`),
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
