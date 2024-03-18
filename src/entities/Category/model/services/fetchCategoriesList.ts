import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkAPIConfig } from '@/app/providers/StoreProvider/config/StateSchema';
import { getRouteListAllCategories } from '@/shared/consts/router/publicRouter';
import { ICategory } from '../../model/types/ICategory';

export const fetchCategoriesList = createAsyncThunk<
  ICategory[],
  void,
  ThunkAPIConfig<string>
>('fetchCategoriesList', async (_, thunkAPI) => {
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
    return rejectWithValue(error.response.data);
  }
});
