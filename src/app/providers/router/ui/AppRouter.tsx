import { Route, Routes } from 'react-router-dom';
import { Suspense } from 'react';
import { publicRouterConfig } from '../config/publicRouterConfig';
import { authRouterConfig } from '../config/authRouterConfig';
import { adminRouterConfig } from '../config/adminRouterConfig';
import { useSelector } from 'react-redux';
import { getAdminRole, getUserRole } from '@/entities/User';
import { PageLoader } from '@/widgets/PageLoader';

export const AppRouter = () => {
  const isAuth = useSelector(getUserRole);
  const isAdmin = useSelector(getAdminRole);
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        <Route />
        {Object.values(publicRouterConfig).map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}
        {!!isAuth &&
          Object.values(authRouterConfig).map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
          ))}
        {!!isAdmin &&
          Object.values(adminRouterConfig).map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
          ))}
      </Routes>
    </Suspense>
  );
};
