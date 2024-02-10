import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkAPIConfig } from '@/app/providers/StoreProvider/config/StateSchema';
import { IBrand } from '../../model/types/BrandSchema';

export const FetchAllBrands = createAsyncThunk<
  IBrand[],
  null,
  ThunkAPIConfig<string>
>('FetchAllBrands', async (_, thunkAPI) => {
  const { rejectWithValue, extra } = thunkAPI;
  try {
    const response = await extra.api.get<IBrand[]>('/brand/brands');
    if (!response.data) {
      throw new Error();
    }
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});
