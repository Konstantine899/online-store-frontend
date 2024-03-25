import { classNames } from '@/shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './MainPage.module.scss';
import { Page } from '@/widgets/Page';

interface MainPageProps {
  className?: string;
}

export const MainPage = memo((props: MainPageProps) => {
  const { className } = props;

  return (
    <Page className={classNames(cls.MainPage, {}, [className])}>
      Главная страница
    </Page>
  );
});
