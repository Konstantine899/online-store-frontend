import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { BurgerMenuSchema } from '../types/BurgerMenuSchema';

const initialState: BurgerMenuSchema = {};

export const BurgerMenuSlice = createSlice({
  name: 'BurgerMenu',
  initialState,
  reducers: {
    template: (state: BurgerMenuSchema, action: PayloadAction<string>) => {},
  },
  // extraReducers: (builder) => {
  //     builder
  //         .addCase(, (state) => {
  //             state.error = undefined;
  //             state.isLoading = true;
  //         })
  //         .addCase(, (state) => {
  //             state.isLoading = false;
  //         })
  //         .addCase(, (state, action) => {
  //             state.isLoading = false;
  //             state.error = action.payload;
  //         });
  // },
});

export const { actions: BurgerMenuActions } = BurgerMenuSlice;
export const { reducer: BurgerMenuReducer } = BurgerMenuSlice;
