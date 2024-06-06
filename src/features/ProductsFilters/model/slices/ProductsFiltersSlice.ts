
  import { createSlice, PayloadAction } from '@reduxjs/toolkit';
  import { ProductsFiltersSchema } from '../types/ProductsFiltersSchema';
  
  const initialState: ProductsFiltersSchema = {};
  
  export const ProductsFiltersSlice = createSlice({
    name: 'ProductsFilters',
    initialState,
    reducers: {
        template: (state: ProductsFiltersSchema, action: PayloadAction<string>) => {
           
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

export const { actions: ProductsFiltersActions } = ProductsFiltersSlice;
export const { reducer: ProductsFiltersReducer } = ProductsFiltersSlice;