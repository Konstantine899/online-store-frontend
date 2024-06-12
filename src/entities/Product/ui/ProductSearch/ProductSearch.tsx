import { memo, useCallback } from 'react';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { useSelector } from 'react-redux';
import { ProductsActions } from '../../model/slices/ProductsSlice';
import { selectProductsSearch } from '../../model/selectors/selectProducts';
import { BrandActions } from '@/entities/Brand';
import { CategoryActions } from '@/entities/Category';
import { Search } from '@/shared/ui/Search/Search';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useNavigate } from 'react-router-dom';
import { getRouteProducts } from '@/shared/consts/router/publicRouter';
import cls from './ProductSearch.module.scss';
import { InputTheme } from '@/shared/ui/Input/Input';
import { useProducts } from '../../api/productsApi';

interface SearchProps {
  className?: string;
}

export const ProductSearch = memo((props: SearchProps) => {
  const { className } = props;

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const search = useSelector(selectProductsSearch);

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

  return (
    <Search
      className={classNames(cls.ProductSearch, {}, [className])}
      fetchData={onChangeFetchProducts}
      onSearch={productSearchChangeHandler}
      search={search}
      placeholder={'Найти товары'}
      theme={InputTheme.WITHOUT_OUTLINE}
    />
  );
});
