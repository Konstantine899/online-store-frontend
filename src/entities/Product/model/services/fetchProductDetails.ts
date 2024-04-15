import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkAPIConfig } from '@/app/providers/StoreProvider/config/StateSchema';
import { IProductDetails } from '../types/IProductDetails';

interface fetchProductDetailsProps {
  id: number;
}

export const fetchProductDetails = createAsyncThunk<
  IProductDetails,
  fetchProductDetailsProps,
  ThunkAPIConfig<string>
>('fetchProductDetails', async ({ id }, thunkAPI) => {
  const { rejectWithValue, extra } = thunkAPI;
  try {
    const response = await extra.api.get<IProductDetails>(`/product/one/${id}`);
    if (!response.data) {
      throw new Error();
    }
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});
