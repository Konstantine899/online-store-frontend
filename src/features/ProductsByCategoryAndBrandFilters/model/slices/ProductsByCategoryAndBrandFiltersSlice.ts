
  import { createSlice, PayloadAction } from '@reduxjs/toolkit';
  import { ProductsByCategoryAndBrandFiltersSchema } from '../types/ProductsByCategoryAndBrandFiltersSchema';
  
  const initialState: ProductsByCategoryAndBrandFiltersSchema = {};
  
  export const ProductsByCategoryAndBrandFiltersSlice = createSlice({
    name: 'ProductsByCategoryAndBrandFilters',
    initialState,
    reducers: {
        template: (state: ProductsByCategoryAndBrandFiltersSchema, action: PayloadAction<string>) => {
           
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

export const { actions: ProductsByCategoryAndBrandFiltersActions } = ProductsByCategoryAndBrandFiltersSlice;
export const { reducer: ProductsByCategoryAndBrandFiltersReducer } = ProductsByCategoryAndBrandFiltersSlice;