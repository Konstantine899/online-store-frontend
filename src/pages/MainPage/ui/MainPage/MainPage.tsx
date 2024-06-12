import { classNames } from '@/shared/lib/classNames/classNames';
import { memo, Suspense } from 'react';
import cls from './MainPage.module.scss';
import { Page } from '@/widgets/Page';
import { CategoriesPopular } from '@/entities/Category';

interface MainPageProps {
  className?: string;
}

export const MainPage = memo((props: MainPageProps) => {
  const { className } = props;

  return (
    <Suspense fallback={''}>
      <Page className={classNames(cls.MainPage, {}, [className])}>
        <CategoriesPopular />
      </Page>
    </Suspense>
  );
});
