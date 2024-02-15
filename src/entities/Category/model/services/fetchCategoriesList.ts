import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkAPIConfig } from '@/app/providers/StoreProvider/config/StateSchema';
import { Category } from '../types/CategorySchema';
import { getRouteListAllCategories } from '@/shared/consts/router/publicRouter';

interface fetchCategoriesListProps {}

export const fetchCategoriesList = createAsyncThunk<
  Category[],
  fetchCategoriesListProps,
  ThunkAPIConfig<string>
>('fetchCategoriesList', async (_, thunkAPI) => {
  const { rejectWithValue, extra } = thunkAPI;
  try {
    const response = await extra.api.get<Category[]>(
      getRouteListAllCategories(),
    );
    if (!response.data) {
      throw new Error();
    }
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});
