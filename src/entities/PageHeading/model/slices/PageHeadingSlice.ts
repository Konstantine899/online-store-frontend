
  import { createSlice, PayloadAction } from '@reduxjs/toolkit';
  import { PageHeadingSchema } from '../types/PageHeadingSchema';
  
  const initialState: PageHeadingSchema = {};
  
  export const PageHeadingSlice = createSlice({
    name: 'PageHeading',
    initialState,
    reducers: {
        template: (state: PageHeadingSchema, action: PayloadAction<string>) => {
           
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

export const { actions: PageHeadingActions } = PageHeadingSlice;
export const { reducer: PageHeadingReducer } = PageHeadingSlice;