import { classNames } from '@/shared/lib/classNames/classNames';
import { memo, useEffect } from 'react';
import {
  ProductList,
  ProductsPageActions,
  ProductsPageReducer,
  FetchProducts,
  getProductsListIsLoadingSelector,
  getProductsListSelector,
} from '@/entities/Product';
import {
  DynamicModuleLoader,
  ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { FiltersActions } from '@/features/Filters';
import { ISortOrder } from '@/shared/types/ISortOrder';
import cls from './ProductsListPage.module.scss';

const initialAsyncReducersProductsListPage: ReducersList = {
  productsList: ProductsPageReducer,
};

interface ArticleListPageProps {
  className?: string;
}

export const ProductsListPage = memo((props: ArticleListPageProps) => {
  const { className } = props;

  const dispatch = useAppDispatch();
  const [URLSearchParams] = useSearchParams();
  const limit = Number(URLSearchParams.get('limit'));
  const page = Number(URLSearchParams.get('page'));
  const search = URLSearchParams.get('search');
  const sort = URLSearchParams.get('sort');

  useEffect(() => {
    dispatch(ProductsPageActions.setPage(page || 1));
    dispatch(ProductsPageActions.setLimit(limit || 5));
    dispatch(FiltersActions.setSearch(search));
    dispatch(FiltersActions.setSortingOrder(sort as ISortOrder));
    dispatch(FetchProducts());
  }, [dispatch, limit, page, search, sort]);

  const products = useSelector(getProductsListSelector);
  const isLoading = useSelector(getProductsListIsLoadingSelector);

  return (
    <DynamicModuleLoader reducers={initialAsyncReducersProductsListPage}>
      <div className={classNames(cls.ArticleListPage, {}, [className])}>
        <ProductList products={products} isLoading={isLoading} />
      </div>
    </DynamicModuleLoader>
  );
});
