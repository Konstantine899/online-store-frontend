import { AppRouter } from '@/app/providers/router/ui/AppRouter';
import { Navbar } from '@/widgets/Navbar/ui/Navbar';
import './styles/index.scss';
import { Suspense } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';

export const App = () => {
  const isAuth = true;
  const isAdmin = true;

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
