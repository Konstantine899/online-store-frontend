export interface IRole {
  id: number;
  role: string;
  description: string;
}

export interface IUser {
  id: number;
  roles: IRole[];
  iat: number;
  exp: number;
  sub: string;
}

export interface IUserSchema {
  userData?: IUser;
}
