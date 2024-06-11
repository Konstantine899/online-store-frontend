import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkAPIConfig } from '@/app/providers/StoreProvider/config/StateSchema';
import { ProductsSchema } from '../types/ProductsSchema';
import { getRouteProducts } from '@/shared/consts/router/publicRouter';

export const fetchProductsCarousel = createAsyncThunk<
  ProductsSchema,
  void,
  ThunkAPIConfig<string>
>('fetchProducts', async (_, thunkAPI) => {
  const { rejectWithValue, extra } = thunkAPI;
  try {
    const response = await extra.api.get<ProductsSchema>(getRouteProducts(), {
      params: { limit: 100 },
    });
    if (!response.data) {
      throw new Error();
    }
    return response.data;
  } catch (error) {
    return rejectWithValue(`${error}`);
  }
});
