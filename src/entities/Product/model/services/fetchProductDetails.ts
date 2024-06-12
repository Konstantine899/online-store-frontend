import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkAPIConfig } from '@/app/providers/StoreProvider/config/StateSchema';
import { IProduct } from '../types/IProduct';

interface fetchProductDetailsProps {
  id: number;
}

export const fetchProductDetails = createAsyncThunk<
  IProduct,
  fetchProductDetailsProps,
  ThunkAPIConfig<string>
>('fetchProductDetails', async ({ id }, thunkAPI) => {
  const { rejectWithValue, extra } = thunkAPI;
  try {
    const response = await extra.api.get<IProduct>(`/product/one/${id}`);
    if (!response.data) {
      throw new Error();
    }
    return response.data;
  } catch (error) {
    return rejectWithValue(`${error}`);
  }
});
