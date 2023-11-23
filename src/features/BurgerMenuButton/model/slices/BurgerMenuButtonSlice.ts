
  import { createSlice, PayloadAction } from '@reduxjs/toolkit';
  import { BurgerMenuButtonSchema } from '../types/BurgerMenuButtonSchema';
  
  const initialState: BurgerMenuButtonSchema = {};
  
  export const BurgerMenuButtonSlice = createSlice({
    name: 'BurgerMenuButton',
    initialState,
    reducers: {
        template: (state: BurgerMenuButtonSchema, action: PayloadAction<string>) => {
           
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

export const { actions: BurgerMenuButtonActions } = BurgerMenuButtonSlice;
export const { reducer: BurgerMenuButtonReducer } = BurgerMenuButtonSlice;