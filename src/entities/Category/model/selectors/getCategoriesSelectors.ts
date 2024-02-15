import { StateSchema } from '@/app/providers/StoreProvider/config/StateSchema';

export const getCategoriesSelectors = (state: StateSchema) =>
  state.categoriesList?.categories ?? [];

export const getCategoryIdSelector = (state: StateSchema) =>
  state.category?.id ?? 0;
