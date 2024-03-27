import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CategorySchema } from '../types/CategorySchema';
import { fetchCategory } from '../services/fetchCategory';
import { ICategory } from '../types/ICategory';
import { CATEGORY_ID } from '@/shared/consts/localstorage';

const initialState: CategorySchema = {
  category: { id: 0, name: '' },
  isLoading: false,
  error: '',
};

export const CategorySliceSlice = createSlice({
  name: 'CategorySliceSlice',
  initialState,
  reducers: {
    initCategory: (state: CategorySchema) => {
      state.category.id = JSON.parse(localStorage.getItem(CATEGORY_ID));
    },
    setCategoryId: (state: CategorySchema, action: PayloadAction<number>) => {
      localStorage.setItem(CATEGORY_ID, JSON.stringify(action.payload));
      state.category.id = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategory.pending, (state: CategorySchema) => {
        state.isLoading = true;
        state.error = '';
      })
      .addCase(
        fetchCategory.fulfilled,
        (state: CategorySchema, action: PayloadAction<ICategory>) => {
          state.isLoading = false;
          state.category.id = action.payload.id;
          state.category.name = action.payload.name;
        },
      )
      .addCase(
        fetchCategory.rejected,
        (state: CategorySchema, action: PayloadAction<string>) => {
          state.isLoading = false;
          state.error = action.payload;
        },
      );
  },
});

export const { actions: CategoryActions } = CategorySliceSlice;
export const { reducer: CategoryReducer } = CategorySliceSlice;
