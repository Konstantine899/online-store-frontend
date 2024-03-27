import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkAPIConfig } from '@/app/providers/StoreProvider/config/StateSchema';
import { IBrand } from '../types/IBrand';
import { getRouteAllBrandsByCategory } from '@/shared/consts/router/publicRouter';

interface fetchAllBrandsByCategoryProps {
  categoryId: number;
}

export const fetchAllBrandsByCategory = createAsyncThunk<
  IBrand[],
  fetchAllBrandsByCategoryProps,
  ThunkAPIConfig<string>
>('fetchAllBrandsByCategory', async ({ categoryId }, thunkAPI) => {
  const { rejectWithValue, extra } = thunkAPI;
  try {
    const response = await extra.api.get<IBrand[]>(
      getRouteAllBrandsByCategory(`${categoryId}`),
    );
    if (!response.data) {
      throw new Error();
    }
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});
