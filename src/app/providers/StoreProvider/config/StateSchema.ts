import { UserSchema } from '@/entities/User';
import { RegistrationSchema } from '@/features/Registration';
import { LoginSchema } from '@/features/Login';
import { AuthSchema } from '@/features/Auth';
import {
  AnyAction,
  CombinedState,
  EnhancedStore,
  Reducer,
} from '@reduxjs/toolkit';
import { ReducersMapObject } from 'redux';
import { AxiosInstance } from 'axios';
import { ProductsSchema } from '@/pages/ProductsPage';
import { FiltersSchema } from '@/features/Filters';
import { BrandSchema } from '@/entities/Brand';
import { IBrand } from '@/entities/Brand/model/types/BrandSchema';

export interface StateSchema {
  auth: AuthSchema;
  user: UserSchema;
  filter: FiltersSchema;
  registrationForm?: RegistrationSchema;
  loginForm?: LoginSchema;
  productsList?: ProductsSchema;
  allBrands?: BrandSchema;
  brand?: IBrand;
}

export type StateSchemaKey = keyof StateSchema;
const keyFromState: StateSchemaKey =
  'registrationForm' || 'loginForm' || 'productsList' || 'brand' || 'allBrands';

export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<StateSchema>;
  reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>;
  add: (key: StateSchemaKey, reducer: Reducer) => void;
  remove: (key: StateSchemaKey) => void;
}

// тип для reducerManager
export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
  reducerManager: ReducerManager;
}

// Типизация extra аргумента
export interface ThunkExtraArg {
  api: AxiosInstance;
}

// Типизация thunkAPI
export interface ThunkAPIConfig<T> {
  rejectValue: T;
  extra: ThunkExtraArg;
  state: StateSchema;
}
