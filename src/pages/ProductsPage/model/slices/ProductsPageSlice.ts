
  import { createSlice, PayloadAction } from '@reduxjs/toolkit';
  import { ProductsPageSchema } from '../types/ProductsPageSchema';
  
  const initialState: ProductsPageSchema = {};
  
  export const ProductsPageSlice = createSlice({
    name: 'ProductsPage',
    initialState,
    reducers: {
        template: (state: ProductsPageSchema, action: PayloadAction<string>) => {
           
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

export const { actions: ProductsPageActions } = ProductsPageSlice;
export const { reducer: ProductsPageReducer } = ProductsPageSlice;