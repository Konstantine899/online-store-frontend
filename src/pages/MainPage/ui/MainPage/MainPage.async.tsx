import { lazy, Suspense } from 'react';
import { MainPageProps } from './MainPage';
import { PageLoader } from '@/widgets/PageLoader';

const MainPageLazy = lazy(() => import('./MainPage'));

export const MainPageAsync = (props: MainPageProps) => (
  <Suspense fallback={<PageLoader />}>
    <MainPageLazy {...props} />
  </Suspense>
);
