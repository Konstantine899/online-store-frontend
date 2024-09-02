import { createSlice } from '@reduxjs/toolkit';
import { IRatingSchema } from '../types/IRatingSchema';

const initialState: IRatingSchema = {
  rating: { ratingsSum: 0, rating: 0, votes: 0 },
  isLoading: false,
  error: '',
};

export const RatingSlice = createSlice({
  name: 'RatingSlice',
  initialState,
  reducers: {},
});

export const { actions: RatingActions } = RatingSlice;
export const { reducer: RatingReducer } = RatingSlice;
