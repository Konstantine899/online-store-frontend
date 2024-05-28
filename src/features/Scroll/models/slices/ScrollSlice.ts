import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ScrollSchema } from '../types/ScrollSchema';

const initialState: ScrollSchema = {
  scroll: {},
};

export const ScrollSliceSlice = createSlice({
  name: 'ScrollSliceSlice',
  initialState,
  reducers: {
    setScrollPosition: (
      state,
      { payload }: PayloadAction<{ path: string; position: number }>,
    ) => {
      state.scroll[payload.path] = payload.position;
    },
  },
});

export const { actions: ScrollActions } = ScrollSliceSlice;
export const { reducer: ScrollReducer } = ScrollSliceSlice;
