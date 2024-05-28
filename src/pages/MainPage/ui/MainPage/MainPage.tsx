import { classNames } from '@/shared/lib/classNames/classNames';
import { memo, Suspense, useEffect } from 'react';
import cls from './MainPage.module.scss';
import { Page } from '@/widgets/Page';
import {
  CategoriesPopular,
  fetchAllCategories,
  getAllCategoriesSelector,
} from '@/entities/Category';
import {
  DynamicModuleLoader,
  ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';

import { ProductPopular } from '@/entities/Product';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { useSelector } from 'react-redux';
import { mainPageReducers } from '../../model/slices/index';

const asyncReducersMainPage: ReducersList = {
  mainPage: mainPageReducers,
};

interface MainPageProps {
  className?: string;
}

export const MainPage = memo((props: MainPageProps) => {
  const { className } = props;
  const dispatch = useAppDispatch();

  const categories = useSelector(getAllCategoriesSelector);

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
