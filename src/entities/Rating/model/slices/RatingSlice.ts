import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IRating, IRatingSchema } from '../types/IRatingSchema';
import { fetchRating } from '../services/fetchRating';

const initialState: IRatingSchema = {
  rating: { rating: 0, ratingsSum: 0, votes: 0 },
  isLoading: false,
  error: undefined,
};

export const RatingSlice = createSlice({
  name: 'Rating',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRating.pending, (state: IRatingSchema) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(
        fetchRating.fulfilled,
        (state: IRatingSchema, action: PayloadAction<IRating>) => {
          state.isLoading = false;
          state.rating.rating = action.payload.rating;
          state.rating.ratingsSum = action.payload.ratingsSum;
          state.rating.votes = action.payload.votes;
        },
      )
      .addCase(
        fetchRating.rejected,
        (state, action: PayloadAction<string | undefined>) => {
          state.isLoading = false;
          state.error = action.payload;
        },
      );
  },
});

export const { actions: RatingActions } = RatingSlice;
export const { reducer: RatingReducer } = RatingSlice;
