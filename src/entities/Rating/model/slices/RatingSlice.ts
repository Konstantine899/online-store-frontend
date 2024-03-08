import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IRating, RatingSchema } from '../types/RatingSchema';
import { fetchRating } from '../services/fetchRating';

const initialState: RatingSchema = {
  rating: { rating: 0, ratingsSum: 0, votes: 0 },
  isLoading: false,
  error: '',
};

export const RatingSlice = createSlice({
  name: 'Rating',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRating.pending, (state: RatingSchema) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(
        fetchRating.fulfilled,
        (state: RatingSchema, action: PayloadAction<IRating>) => {
          state.isLoading = false;
          state.rating.rating = action.payload.rating;
          state.rating.ratingsSum = action.payload.ratingsSum;
          state.rating.votes = action.payload.votes;
        },
      )
      .addCase(fetchRating.rejected, (state, action: PayloadAction<string>) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { actions: RatingActions } = RatingSlice;
export const { reducer: RatingReducer } = RatingSlice;
