
  import { createSlice, PayloadAction } from '@reduxjs/toolkit';
  import { MainPageSchema } from '../types/MainPageSchema';
  
  const initialState: MainPageSchema = {};
  
  export const MainPageSlice = createSlice({
    name: 'MainPage',
    initialState,
    reducers: {
        template: (state: MainPageSchema, action: PayloadAction<string>) => {
           
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

export const { actions: MainPageActions } = MainPageSlice;
export const { reducer: MainPageReducer } = MainPageSlice;