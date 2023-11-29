export interface User {
  type: string;
  accessToken: string;
  refreshToken: string;
}

export interface UserSchema {
  authData?: User;
}
