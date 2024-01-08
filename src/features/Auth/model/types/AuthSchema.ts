export interface Auth {
  type: string;
  accessToken: string;
  refreshToken: string;
}

export interface AuthSchema {
  authData?: Auth;
}
