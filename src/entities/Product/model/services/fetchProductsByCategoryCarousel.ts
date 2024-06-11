import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkAPIConfig } from '@/app/providers/StoreProvider/config/StateSchema';
import { ProductsSchema } from '../types/ProductsSchema';
import { getRouteProductsByCategory } from '@/shared/consts/router/publicRouter';
import { CategoryActions } from '@/entities/Category';

interface IFetchProductsByCategoryCarousel {
  categoryId: number;
}

export const fetchProductsByCategoryCarousel = createAsyncThunk<
  ProductsSchema,
  IFetchProductsByCategoryCarousel,
  ThunkAPIConfig<string>
>('fetchProducts', async ({ categoryId }, thunkAPI) => {
  const { rejectWithValue, extra, dispatch } = thunkAPI;
  dispatch(CategoryActions.setCategoryId(categoryId));
  localStorage.setItem(`categoryId`, JSON.stringify(categoryId));
  try {
    const response = await extra.api.get<ProductsSchema>(
      getRouteProductsByCategory(`${categoryId}`),
      {
        params: { limit: 20 },
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
