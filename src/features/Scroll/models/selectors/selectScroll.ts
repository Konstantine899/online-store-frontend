import { StateSchema } from '@/app/providers/StoreProvider/config/StateSchema';
import { createSelector } from '@reduxjs/toolkit';
import { TScroll } from '../types/ScrollSchema';

export const selectScroll = (state: StateSchema) => state.scroll.scroll;

export const selectScrollPosition = createSelector(
  selectScroll,
  (state: StateSchema, path: string) => path, // если selector принимает несколько аргументов, то обязательно возвращаю его
  (scroll: TScroll, path: string) => scroll[path] || 0,
);
