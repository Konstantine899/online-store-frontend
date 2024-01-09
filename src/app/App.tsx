import { AppRouter } from '@/app/providers/router/ui/AppRouter';
import { Navbar } from '@/widgets/Navbar/ui/Navbar';
import './styles/index.scss';
import { Suspense, useEffect } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { UserActions } from '@/entities/User';
import { AuthActions } from '@/features/Auth';

export const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(AuthActions.initAuthData());
    dispatch(UserActions.initUserData());
  }, [dispatch]);

  return (
    <div className={classNames('app', {}, [])}>
      <Suspense fallback="">
        <Navbar />
        <div className="content_page">
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
};
