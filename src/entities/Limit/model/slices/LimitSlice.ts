
  import { createSlice, PayloadAction } from '@reduxjs/toolkit';
  import { LimitSchema } from '../types/LimitSchema';
  
  const initialState: LimitSchema = {};
  
  export const LimitSlice = createSlice({
    name: 'Limit',
    initialState,
    reducers: {
        template: (state: LimitSchema, action: PayloadAction<string>) => {
           
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

export const { actions: LimitActions } = LimitSlice;
export const { reducer: LimitReducer } = LimitSlice;