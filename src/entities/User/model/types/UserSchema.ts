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
  userData?: User;
}
