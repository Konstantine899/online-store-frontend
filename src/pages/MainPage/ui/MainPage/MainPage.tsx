import { classNames } from '@/shared/lib/classNames/classNames';
import { memo, Suspense } from 'react';
import cls from './MainPage.module.scss';
import { Page } from '@/widgets/Page';
import { CategoriesPopular, CategoriesReducer } from '@/entities/Category';
import {
  DynamicModuleLoader,
  ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';

import { ProductsCarouselReducer, ProductPopular } from '@/entities/Product';

const asyncReducersMainPage: ReducersList = {
  categoriesList: CategoriesReducer,
  productsList: ProductsCarouselReducer,
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
