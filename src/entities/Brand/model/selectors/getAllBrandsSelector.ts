import { StateSchema } from '@/app/providers/StoreProvider/config/StateSchema';

export const GetAllBrandsSelector = (state: StateSchema) =>
  state.allBrands?.brands ?? [];