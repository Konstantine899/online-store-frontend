
  import { createSlice, PayloadAction } from '@reduxjs/toolkit';
  import { SortOrderSchema } from '../types/SortOrderSchema';
  
  const initialState: SortOrderSchema = {};
  
  export const SortOrderSlice = createSlice({
    name: 'SortOrder',
    initialState,
    reducers: {
        template: (state: SortOrderSchema, action: PayloadAction<string>) => {
           
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

export const { actions: SortOrderActions } = SortOrderSlice;
export const { reducer: SortOrderReducer } = SortOrderSlice;