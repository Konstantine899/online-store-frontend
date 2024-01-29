import { classNames } from '@/shared/lib/classNames/classNames';
import { memo, useEffect } from 'react';
import cls from './ProductsListPage.module.scss';
import { ProductList } from '@/entities/Product';
import {
  DynamicModuleLoader,
  ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import {
  ProductsPageActions,
  ProductsPageReducer,
} from '../../model/slices/ProductsPageSlice';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { fetchProductsListPage } from '../../model/services/fetchProductsListPage/fetchProductsListPage';
import { useSelector } from 'react-redux';
import {
  getProductsState,
  isLoadingProducts,
} from '../../model/selectors/getProductsListPageState';

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
    dispatch(ProductsPageActions.setLimit(5));
    dispatch(fetchProductsListPage());
  }, [dispatch]);

  const products = useSelector(getProductsState);
  const isLoading = useSelector(isLoadingProducts);

  return (
    <DynamicModuleLoader reducers={initialAsyncReducersProductsListPage}>
      <div className={classNames(cls.ArticleListPage, {}, [className])}>
        <ProductList products={products} isLoading={isLoading} />
      </div>
    </DynamicModuleLoader>
  );
});
