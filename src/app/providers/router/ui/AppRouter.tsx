import { Route, Routes } from 'react-router-dom';
import { Suspense } from 'react';
import { publicRouterConfig } from '../config/publicRouterConfig';
import { authRouterConfig } from '../config/authRouterConfig';
import { adminRouterConfig } from '../config/adminRouterConfig';

interface AppRouterProps {
  isAuth: boolean;
  isAdmin: boolean;
}

export const AppRouter = (props: AppRouterProps) => {
  const { isAuth, isAdmin } = props;
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route />
        {Object.values(publicRouterConfig).map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}
        {isAuth &&
          Object.values(authRouterConfig).map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
          ))}
        {isAdmin &&
          Object.values(adminRouterConfig).map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
          ))}
      </Routes>
    </Suspense>
  );
};
