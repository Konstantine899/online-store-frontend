import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkAPIConfig } from '@/app/providers/StoreProvider/config/StateSchema';
import { ICategory } from '../types/ICategory';

interface fetchCategoryProps {
  id: number;
}

export const fetchCategory = createAsyncThunk<
  ICategory,
  fetchCategoryProps,
  ThunkAPIConfig<string>
>('fetchCategory', async ({ id }, thunkAPI) => {
  const { rejectWithValue, extra } = thunkAPI;
  try {
    const response = await extra.api.get<ICategory>(`/category/one/${id}`);
    if (!response.data) {
      throw new Error();
    }
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});
