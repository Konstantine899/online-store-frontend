export interface Auth {
  type: string;
  accessToken: string;
  refreshToken: string;
}

export interface Role {
  id: number;
  role: string;
  description: string;
}

export interface User {
  id: number;
  roles: Role[];
  iat: number;
  exp: number;
  sub: string;
}

export interface UserSchema {
  authData?: Auth;
  userData?: User;
}
