import { StateSchema } from '@/app/providers/StoreProvider/config/StateSchema';

export const selectAuth = (state: StateSchema) => state.auth;
