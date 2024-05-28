import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkAPIConfig } from '@/app/providers/StoreProvider/config/StateSchema';
import { ICategory } from '../types/ICategory';
import { getRouteListAllCategories } from '@/shared/consts/router/publicRouter';

export const fetchCategoriesPopular = createAsyncThunk<
  ICategory[],
  void,
  ThunkAPIConfig<string>
>('fetchCategoriesPopular', async (_, thunkAPI) => {
  const { rejectWithValue, extra } = thunkAPI;
  try {
    const response = await extra.api.get<ICategory[]>(
      getRouteListAllCategories(),
    );
    if (!response.data) {
      throw new Error();
    }
    return response.data;
  } catch (error) {
    return rejectWithValue(`${error}`);
  }
});
