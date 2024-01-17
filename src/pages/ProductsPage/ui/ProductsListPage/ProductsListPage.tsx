import { classNames } from '@/shared/lib/classNames/classNames';
import { memo, useEffect } from 'react';
import cls from './ProductsListPage.module.scss';
import { ProductList } from '@/entities/Product';
import {
  DynamicModuleLoader,
  ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { ProductsPageReducer } from '@/pages/ProductsPage/model/slices/ProductsPageSlice';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { fetchProductsListPage } from '@/pages/ProductsPage/model/services/fetchProductsListPage/fetchProductsListPage';
import { useSelector } from 'react-redux';
import { getProductsState } from '@/pages/ProductsPage/model/selectors/getProductsListPageState';

const initialAsyncReducersProductsListPage: ReducersList = {
  productsListPage: ProductsPageReducer,
};

interface ArticleListPageProps {
  className?: string;
}

export const ProductsListPage = memo((props: ArticleListPageProps) => {
  const { className } = props;

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProductsListPage());
  }, [dispatch]);

  const products = useSelector(getProductsState);

  return (
    <DynamicModuleLoader reducers={initialAsyncReducersProductsListPage}>
      <div className={classNames(cls.ArticleListPage, {}, [className])}>
        <ProductList products={products} />
      </div>
    </DynamicModuleLoader>
  );
});
