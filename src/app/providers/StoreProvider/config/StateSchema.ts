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
import { EntityBrandSchema } from '@/entities/Brand';
import { EntityCategorySchema } from '@/entities/Category';
import { EntityProductSchema } from '@/entities/Product';
import { RatingSchema } from '@/entities/Rating';
import { ScrollSchema } from '@/features/Scroll';

export interface StateSchema {
  auth: AuthSchema;
  user: UserSchema;
  scroll: ScrollSchema;
  registrationForm?: RegistrationSchema;
  loginForm?: LoginSchema;
  entityProduct?: EntityProductSchema;
  entityBrand?: EntityBrandSchema;
  entityCategory?: EntityCategorySchema;
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
