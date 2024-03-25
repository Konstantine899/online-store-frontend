import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkAPIConfig } from '@/app/providers/StoreProvider/config/StateSchema';

import { IBrand } from '../types/IBrand';
import { getRouteBrand } from '@/shared/consts/router/publicRouter';

interface fetchBrandProps {
  id: number;
}

export const fetchBrand = createAsyncThunk<
  IBrand,
  fetchBrandProps,
  ThunkAPIConfig<string>
>('fetchBrand', async ({ id }, thunkAPI) => {
  const { rejectWithValue, extra } = thunkAPI;
  try {
    const response = await extra.api.get<IBrand>(getRouteBrand(`${id}`));
    if (!response.data) {
      throw new Error();
    }
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});
