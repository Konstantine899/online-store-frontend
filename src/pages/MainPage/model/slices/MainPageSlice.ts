import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { MainPageSchema } from '../types';

const initialState: MainPageSchema = {
  productsCarouselList: {
    rows: [],
    metaData: {
      limit: 0,
      currentPage: 0,
      lastPage: 0,
      nextPage: 0,
      previousPage: 0,
      totalCount: 0,
    },
    _inited: false,
    count: 0,
    error: undefined,
    isLoading: false,
    search: '',
    sortingOrder: 'asc',
  },
};

export const MainPageSlice = createSlice({
  name: 'MainPage',
  initialState,
  reducers: {
    template: (state: MainPageSchema, action: PayloadAction<string>) => {},
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

export const { actions: MainPageActions } = MainPageSlice;
export const { reducer: MainPageReducer } = MainPageSlice;
