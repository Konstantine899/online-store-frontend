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
import { ProductsSchema } from '@/pages/ProductsPage';
import {
  AllBrandsSchema,
  BrandSchema,
  AllBrandsByCategorySchema,
} from '@/entities/Brand';
import { AllCategoriesSchema, CategorySchema } from '@/entities/Category';
import { ProductDetailsPageSchema } from '@/pages/ProductDetailsPage';
import { RatingSchema } from '@/entities/Rating';

export interface StateSchema {
  auth: AuthSchema;
  user: UserSchema;
  registrationForm?: RegistrationSchema;
  loginForm?: LoginSchema;
  productsList?: ProductsSchema;
  productDetailsPage: ProductDetailsPageSchema;
  allBrands?: AllBrandsSchema;
  allBrandsByCategory?: AllBrandsByCategorySchema;
  categoriesList?: AllCategoriesSchema;
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
