import { classNames } from '@/shared/lib/classNames/classNames';
import { memo, Suspense } from 'react';
import cls from './MainPage.module.scss';
import { Page } from '@/widgets/Page';
import { CategoriesPopular } from '@/entities/Category';

export interface MainPageProps {
  className?: string;
}

const ROOT: string = 'MainPage';

const MainPage = memo((props: MainPageProps) => {
  const { className } = props;

  return (
    <Page className={classNames(cls.MainPage, {}, [className])}>
      <CategoriesPopular />
    </Page>
  );
});

export default MainPage;

MainPage.displayName = ROOT;
