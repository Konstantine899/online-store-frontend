enum UserRole {
  USER = 'USER',
  ADMIN = 'ADMIN',
}

interface IRoles {
  id: number;
  role: UserRole;
  description: string;
}

interface IUserData {
  id: number;
  exp: number;
  iat: number;
  sub: string;
  roles: IRoles[];
}

interface IAuthUser {
  userData: IUserData;
}

export const user: IAuthUser = {
  userData: {
    id: 5,
    exp: 1724324303,
    iat: 1724237903,
    sub: '',
    roles: [
      {
        id: 2,
        role: UserRole.USER,
        description: 'Пользователь',
      },
    ],
  },
};
