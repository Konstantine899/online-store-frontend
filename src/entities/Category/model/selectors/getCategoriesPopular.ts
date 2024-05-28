import { StateSchema } from '@/app/providers/StoreProvider/config/StateSchema';

export const getCategoriesPopular = (state: StateSchema) =>
  state.entityCategory?.categoriesPopular?.categories || [];
