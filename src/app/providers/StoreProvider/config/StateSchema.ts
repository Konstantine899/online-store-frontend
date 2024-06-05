import { UserSchema } from '@/entities/User';
import { RegistrationSchema } from '@/features/Registration';
import { LoginSchema } from '@/features/Login';
import { AuthSchema } from '@/entities/Auth';
import {
  AnyAction,
  CombinedState,
  EnhancedStore,
  Reducer,
} from '@reduxjs/toolkit';
import { ReducersMapObject } from 'redux';
import { AxiosInstance } from 'axios';
import { BrandSchema } from '@/entities/Brand';
import { CategorySchema } from '@/entities/Category';
import { RatingSchema } from '@/entities/Rating';
import { ScrollSchema } from '@/features/Scroll';
import { rtkApi } from '@/shared/api/rtkApi';
import { ProductsPageSchema } from '@/pages/ProductsPage';
import { ProductDetailsPageSchema } from '@/pages/ProductDetailsPage';
import { MainPageSchema } from '@/pages/MainPage';

export interface StateSchema {
  auth: AuthSchema;
  user: UserSchema;
  scroll: ScrollSchema;
  mainPage: MainPageSchema;
  [rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>;
  registrationForm?: RegistrationSchema;
  loginForm?: LoginSchema;
  productsPage?: ProductsPageSchema;
  productDetailsPage?: ProductDetailsPageSchema;
  brand?: BrandSchema;
  category?: CategorySchema;
  rating?: RatingSchema;
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
