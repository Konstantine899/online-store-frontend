import { AppRouter } from '@/app/providers/router/ui/AppRouter';
import { Navbar } from '@/widgets/Navbar/ui/Navbar';
import './styles/index.scss';
import { Suspense, useEffect } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { UserActions } from '@/entities/User';

export const App = () => {
  const isAuth = true;
  const isAdmin = true;

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(UserActions.initAuthData());
  }, [dispatch]);

  return (
    <div className={classNames('app', {}, [])}>
      <Suspense fallback="">
        <Navbar />
        <div className="content_page">
          <AppRouter isAdmin={isAdmin} isAuth={isAuth} />
        </div>
      </Suspense>
    </div>
  );
};
