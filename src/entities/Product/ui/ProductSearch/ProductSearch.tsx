import { memo, useCallback } from 'react';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { useSelector } from 'react-redux';
import {
  ProductsActions,
  ProductsReducer,
} from '../../model/slices/ProductsSlice';
import { fetchProducts } from '../../model/services/fetchProducts';
import { getSearchSelector } from '../../model/selectors/getProductsSelector';
import { BrandActions } from '@/entities/Brand';
import { CategoryActions } from '@/entities/Category';
import { Search } from '@/shared/ui/Search/Search';
import { classNames } from '@/shared/lib/classNames/classNames';
import { DynamicModuleLoader } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { addQueryParams } from '@/shared/url/addQueryParams';
import { useNavigate } from 'react-router-dom';
import { getRouteListProducts } from '@/shared/consts/router/publicRouter';
import cls from './ProductSearch.module.scss';

const initialAsyncReducersProductSearch = {
  productsList: ProductsReducer,
};

interface SearchProps {
  className?: string;
}

export const ProductSearch = memo((props: SearchProps) => {
  const { className } = props;

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const search = useSelector(getSearchSelector);

  const onChangeFetchProducts = useCallback(() => {
    dispatch(BrandActions.setBrandId(0));
    dispatch(CategoryActions.setCategoryId(0));
    addQueryParams({ search: `${search}` });
    dispatch(fetchProducts());
  }, [dispatch, search]);

  const productSearchChangeHandler = useCallback(
    (search: string) => {
      dispatch(ProductsActions.setSearch(search));
      dispatch(ProductsActions.setPage(1));
    },
    [dispatch],
  );

  const onNavigate = useCallback(() => {
    navigate(getRouteListProducts());
  }, [navigate]);

  return (
    <DynamicModuleLoader reducers={initialAsyncReducersProductSearch}>
      <Search
        className={classNames(cls.ProductSearch, {}, [className])}
        fetchData={onChangeFetchProducts}
        onSearch={productSearchChangeHandler}
        search={search}
        navigate={onNavigate}
        placeholder={'Найти товары'}
      />
    </DynamicModuleLoader>
  );
});
