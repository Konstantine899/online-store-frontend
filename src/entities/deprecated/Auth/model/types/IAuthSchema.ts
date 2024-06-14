/**
 * @deprecated
 */
export interface IAuth {
  type: string;
  accessToken: string;
  refreshToken: string;
}

/**
 * @deprecated
 */
export interface IAuthSchema {
  authData: IAuth;
}
