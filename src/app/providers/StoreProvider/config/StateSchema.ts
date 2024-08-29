import { IUserSchema } from '@/entities/User';
import { IAuthModalSchema, IAuthSchema } from '@/features/Auth';
import {
  AnyAction,
  CombinedState,
  EnhancedStore,
  Reducer,
} from '@reduxjs/toolkit';
import { ReducersMapObject } from 'redux';
import { AxiosInstance } from 'axios';
import { IBrandSchema } from '@/entities/Brand';
import { ICategorySchema } from '@/entities/Category';
import { IRatingSchema } from '@/entities/Rating';
import { ScrollSchema } from '@/entities/Scroll';
import { rtkApi } from '@/shared/api/rtkApi';
import { ProductPageSchema } from '@/pages/ProductPage';
import { ProductsByCategoryPageSchema } from '@/pages/ProductsByCategoryPage';
import { IProductsSchema } from '@/entities/Product';

export interface StateSchema {
  user: IUserSchema;
  scroll: ScrollSchema;
  auth: IAuthSchema;
  authModal: IAuthModalSchema;
  products: IProductsSchema;
  [rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>;
  productsByCategoryPage?: ProductsByCategoryPageSchema;
  productsByCategoryAndBrand?: IProductsSchema;
  productPage?: ProductPageSchema;
  brand?: IBrandSchema;
  category?: ICategorySchema;
  rating?: IRatingSchema;
}

// Конструкция, с помощью которой достаю ключи. Которые являются названиями reducers
export type StateSchemaKey = keyof StateSchema;
export type MountedReducers = OptionalRecord<StateSchemaKey, boolean>;

export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<StateSchema>;
  reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>;
  add: (key: StateSchemaKey, reducer: Reducer) => void;
  remove: (key: StateSchemaKey) => void;
  // true-вмонтирован, false-демонтирован
  getMountedReducers: () => MountedReducers;
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
