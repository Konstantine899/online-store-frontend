import { FetchBaseQueryError } from '@reduxjs/toolkit/query';

export interface IAuth {
  type: string;
  accessToken: string;
  refreshToken: string;
}

export enum AuthValidateProperty {
  EMAIL = 'email',
  PASSWORD = 'password',
}

export interface IAuthValidate {
  status: number;
  property: AuthValidateProperty;
  messages: string[];
  value: string;
}

export interface IAuthSchema {
  auth: IAuth;
  email: string;
  password: string;
  isLoading: boolean;
  isSuccess: boolean;
  error: FetchBaseQueryError | undefined;
}
