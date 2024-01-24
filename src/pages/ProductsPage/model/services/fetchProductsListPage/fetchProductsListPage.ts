import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkAPIConfig } from '@/app/providers/StoreProvider/config/StateSchema';
import { ProductsPageSchema } from '@/pages/ProductsPage';

export const fetchProductsListPage = createAsyncThunk<
  ProductsPageSchema,
  void,
  ThunkAPIConfig<string>
>('FetchProductsListPage', async (_, thunkAPI) => {
  const { rejectWithValue, extra } = thunkAPI;
  try {
    const response = await extra.api.get('/product/all');
    if (!response.data) {
      throw new Error();
    }
    return response.data;
  } catch (error) {
    return rejectWithValue(error);
  }
});
