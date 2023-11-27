
  import { createSlice, PayloadAction } from '@reduxjs/toolkit';
  import { CategorySchema } from '../types/CategorySchema';
  
  const initialState: CategorySchema = {};
  
  export const CategorySlice = createSlice({
    name: 'Category',
    initialState,
    reducers: {
        template: (state: CategorySchema, action: PayloadAction<string>) => {
           
        },
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

export const { actions: CategoryActions } = CategorySlice;
export const { reducer: CategoryReducer } = CategorySlice;