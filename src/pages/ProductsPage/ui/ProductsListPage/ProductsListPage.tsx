import { classNames } from '@/shared/lib/classNames/classNames';
import { memo, useEffect } from 'react';
import {
  FetchProducts,
  FetchProductsByBrand,
  getProductsListIsLoadingSelector,
  getProductsListSelector,
  ProductList,
  ProductsPageActions,
  ProductsPageReducer,
} from '@/entities/Product';
import {
  DynamicModuleLoader,
  ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { ISortOrder } from '@/shared/types/ISortOrder';
import cls from './ProductsListPage.module.scss';
import { BrandActions, BrandReducer } from '@/entities/Brand';

const initialAsyncReducersProductsListPage: ReducersList = {
  productsList: ProductsPageReducer,
  brand: BrandReducer,
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
  const brandId = Number(URLSearchParams.get('brand'));

  useEffect(() => {
    dispatch(ProductsPageActions.setPage(page || 1));
    dispatch(ProductsPageActions.setLimit(limit || 5));
    dispatch(ProductsPageActions.setSearch(search));
    dispatch(ProductsPageActions.setSortingOrder(sort as ISortOrder));
    dispatch(BrandActions.setBrandId(brandId));
    if (brandId) dispatch(FetchProductsByBrand({ brandId: Number(brandId) }));
    if (!brandId) dispatch(FetchProducts());
  }, [brandId, dispatch, limit, page, search, sort]);

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
