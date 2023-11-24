
  import { createSlice, PayloadAction } from '@reduxjs/toolkit';
  import { MenuSchema } from '../types/MenuSchema';
  
  const initialState: MenuSchema = {};
  
  export const MenuSlice = createSlice({
    name: 'Menu',
    initialState,
    reducers: {
        template: (state: MenuSchema, action: PayloadAction<string>) => {
           
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

export const { actions: MenuActions } = MenuSlice;
export const { reducer: MenuReducer } = MenuSlice;