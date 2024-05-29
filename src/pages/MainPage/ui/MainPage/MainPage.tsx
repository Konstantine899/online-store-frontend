import { classNames } from '@/shared/lib/classNames/classNames';
import { memo, Suspense, useEffect } from 'react';
import cls from './MainPage.module.scss';
import { Page } from '@/widgets/Page';
import {
  CategoriesPopular,
  entityCategoryReducers,
  fetchAllCategories,
} from '@/entities/Category';
import {
  DynamicModuleLoader,
  ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';

import { entityProductReducers, ProductPopular } from '@/entities/Product';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';

const asyncReducersMainPage: ReducersList = {
  entityProduct: entityProductReducers,
  entityCategory: entityCategoryReducers,
};

interface MainPageProps {
  className?: string;
}

export const MainPage = memo((props: MainPageProps) => {
  const { className } = props;
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchAllCategories());
  }, [dispatch]);

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
