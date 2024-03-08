import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkAPIConfig } from '@/app/providers/StoreProvider/config/StateSchema';
import { IRating } from '../types/RatingSchema';

interface fetchRatingProps {
  productId: number;
}

export const fetchRating = createAsyncThunk<
  IRating,
  fetchRatingProps,
  ThunkAPIConfig<string>
>('fetchRating', async ({ productId }, thunkAPI) => {
  const { rejectWithValue, extra } = thunkAPI;
  try {
    const response = await extra.api.get<IRating>(
      `/rating/product/${productId}`,
    );
    if (!response.data) {
      throw new Error();
    }
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});
