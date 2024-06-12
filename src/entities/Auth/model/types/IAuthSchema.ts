export interface IAuth {
  type: string;
  accessToken: string;
  refreshToken: string;
}

export interface IAuthSchema {
  authData?: IAuth;
}
