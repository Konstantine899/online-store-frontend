import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ScrollSchema } from '../types/ScrollSchema';
import { PATH, SCROLL_POSITION } from '@/shared/consts/localstorage';

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
      localStorage.setItem(PATH, JSON.stringify(payload.path));
      localStorage.setItem(SCROLL_POSITION, JSON.stringify(payload.position));
      state.scroll[payload.path] = payload.position;
    },
  },
});

export const { actions: ScrollActions } = ScrollSliceSlice;
export const { reducer: ScrollReducer } = ScrollSliceSlice;
