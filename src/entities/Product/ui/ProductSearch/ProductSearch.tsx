import { memo, useCallback } from 'react';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { useSelector } from 'react-redux';
import {
  ProductsPageActions,
  ProductsPageReducer,
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

const initialAsyncReducersProductSearch = {
  productsList: ProductsPageReducer,
};

interface SearchProps {
  className?: string;
}

export const ProductSearch = memo((props: SearchProps) => {
  const { className } = props;

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const search = useSelector(getSearchSelector);

  const getProducts = useCallback(() => {
    dispatch(BrandActions.setBrandId(0));
    dispatch(CategoryActions.setCategoryId(0));
    dispatch(fetchProducts());
  }, [dispatch]);

  const onSearch = useCallback(
    (search: string) => {
      addQueryParams({ search: `${search}` });
      dispatch(ProductsPageActions.setSearch(search));
      dispatch(ProductsPageActions.setPage(1));
    },
    [dispatch],
  );

  const onNavigate = useCallback(() => {
    navigate(getRouteListProducts());
  }, [navigate]);

  return (
    <DynamicModuleLoader reducers={initialAsyncReducersProductSearch}>
      <Search
        className={classNames(``, {}, [className])}
        onValue={getProducts}
        onSearch={onSearch}
        search={search}
        navigate={onNavigate}
      />
    </DynamicModuleLoader>
  );
});
