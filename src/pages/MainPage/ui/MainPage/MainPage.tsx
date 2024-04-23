import { classNames } from '@/shared/lib/classNames/classNames';
import { memo, Suspense, useEffect } from 'react';
import cls from './MainPage.module.scss';
import { Page } from '@/widgets/Page';
import {
  CategoriesPopular,
  CategoriesReducer,
  fetchAllCategories,
  getAllCategoriesSelector,
} from '@/entities/Category';
import {
  DynamicModuleLoader,
  ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';

import { ProductsCarouselReducer, ProductPopular } from '@/entities/Product';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { useSelector } from 'react-redux';

const asyncReducersMainPage: ReducersList = {
  categoriesList: CategoriesReducer,
  productsList: ProductsCarouselReducer,
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
          <CategoriesPopular categories={categories} />
          <ProductPopular categories={categories} />
        </Page>
      </DynamicModuleLoader>
    </Suspense>
  );
});
