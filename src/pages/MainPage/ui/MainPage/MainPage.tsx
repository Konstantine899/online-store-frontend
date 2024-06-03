import { classNames } from '@/shared/lib/classNames/classNames';
import { memo, Suspense } from 'react';
import cls from './MainPage.module.scss';
import { Page } from '@/widgets/Page';
import { CategoriesPopular, categoryReducers } from '@/entities/Category';
import {
  DynamicModuleLoader,
  ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { entityProductReducers, ProductPopular } from '@/entities/Product';

const asyncReducersMainPage: ReducersList = {
  entityProduct: entityProductReducers,
  category: categoryReducers,
};

interface MainPageProps {
  className?: string;
}

export const MainPage = memo((props: MainPageProps) => {
  const { className } = props;

  return (
    <Suspense fallback={''}>
      <DynamicModuleLoader reducers={asyncReducersMainPage}>
        <Page className={classNames(cls.MainPage, {}, [className])}>
          <CategoriesPopular />
          <ProductPopular />
        </Page>
      </DynamicModuleLoader>
    </Suspense>
  );
});
