
  import { createSlice, PayloadAction } from '@reduxjs/toolkit';
  import { PaginateSchema } from '../types/PaginateSchema';
  
  const initialState: PaginateSchema = {};
  
  export const PaginateSlice = createSlice({
    name: 'Paginate',
    initialState,
    reducers: {
        template: (state: PaginateSchema, action: PayloadAction<string>) => {
           
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

export const { actions: PaginateActions } = PaginateSlice;
export const { reducer: PaginateReducer } = PaginateSlice;