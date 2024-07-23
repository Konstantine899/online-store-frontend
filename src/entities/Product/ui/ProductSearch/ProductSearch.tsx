import { memo, useCallback } from 'react';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { useSelector } from 'react-redux';
import { ProductsActions } from '../../model/slices/ProductsSlice';
import { selectProductsSearch } from '../../model/selectors/selectProducts';
import { BrandActions } from '@/entities/Brand';
import { CategoryActions } from '@/entities/Category';
import { Search } from '@/shared/ui/Search/Search';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { getRouteProducts } from '@/shared/consts/router/publicRouter';
import cls from './ProductSearch.module.scss';
import { InputTheme } from '@/shared/ui/Input/Input';
import { useProducts } from '../../api/productsApi';
import { SEARCH } from '@/shared/consts/urlParams';

interface SearchProps {
  className?: string;
}

export const ProductSearch = memo((props: SearchProps) => {
  const { className } = props;

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const search = useSelector(selectProductsSearch);
  const [searchParams] = useSearchParams();
  const urlParamSearch = searchParams.get(SEARCH);

  const [fetchProducts] = useProducts();

  const onChangeFetchProducts = useCallback(() => {
    fetchProducts({ search });
  }, [fetchProducts, search]);

  const productSearchChangeHandler = useCallback(
    (search: string) => {
      navigate(getRouteProducts());
      dispatch(BrandActions.setBrandId(0));
      dispatch(CategoryActions.setCategoryId(0));
      dispatch(ProductsActions.setSearch(search));
      dispatch(ProductsActions.setPage(1));
    },
    [dispatch, navigate],
  );

  const isSearch = urlParamSearch ? urlParamSearch : search;

  return (
    <Search
      className={classNames(cls.ProductSearch, {}, [className])}
      fetchData={onChangeFetchProducts}
      onSearch={productSearchChangeHandler}
      search={isSearch}
      placeholder={'Найти товары'}
      theme={InputTheme.WITHOUT_OUTLINE}
    />
  );
});

ProductSearch.displayName = `ProductSearch`;
