import { StateSchema } from '@/app/providers/StoreProvider/config/StateSchema';
import { createSelector } from '@reduxjs/toolkit';
import { TScroll } from '../types/ScrollSchema';
import { PATH, SCROLL_POSITION } from '@/shared/consts/localstorage';

export const selectScroll = (state: StateSchema) => state.scroll.scroll;

export const selectScrollPosition = createSelector(
  selectScroll,
  (state: StateSchema, path: string) =>
    path || JSON.parse(localStorage.getItem(PATH) || ''), // если selector принимает несколько аргументов, то обязательно возвращаю его
  (scroll: TScroll, path: string) =>
    scroll[path] || JSON.parse(localStorage.getItem(SCROLL_POSITION) || '0'),
);
