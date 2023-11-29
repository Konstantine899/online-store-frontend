
  import { createSlice, PayloadAction } from '@reduxjs/toolkit';
  import { AuthSchema } from '../types/AuthSchema';
  
  const initialState: AuthSchema = {};
  
  export const AuthSlice = createSlice({
    name: 'Auth',
    initialState,
    reducers: {
        template: (state: AuthSchema, action: PayloadAction<string>) => {
           
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

export const { actions: AuthActions } = AuthSlice;
export const { reducer: AuthReducer } = AuthSlice;