import { classNames } from '@/shared/lib/classNames/classNames';
import { memo, useCallback } from 'react';
import cls from './ProductSearch.module.scss';
import { Input, InputTheme } from '@/shared/ui/Input/Input';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { useSelector } from 'react-redux';
import { ProductsPageActions } from '../../model/slices/ProductsSlice';
import { fetchProducts } from '../../model/services/fetchProducts';
import { getSearchSelector } from '../../model/selectors/getProductsSelector';
import { useDebounce } from '@/shared/lib/hooks/useDebounce';
import { BrandActions } from '@/entities/Brand';
import { CategoryActions } from '@/entities/Category';

interface SearchProps {
  className?: string;
}

export const ProductSearch = memo((props: SearchProps) => {
  const { className } = props;

  const dispatch = useAppDispatch();
  const search = useSelector(getSearchSelector);

  const getProducts = useCallback(() => {
    dispatch(BrandActions.setBrandId(0));
    dispatch(CategoryActions.setCategoryId(0));
    dispatch(fetchProducts());
  }, [dispatch]);

  const debounceFetchProductsListPage = useDebounce(getProducts, 1000);

  const onSearch = useCallback(
    (search: string) => {
      dispatch(ProductsPageActions.setSearch(search));
      dispatch(ProductsPageActions.setPage(1));
      debounceFetchProductsListPage();
    },
    [debounceFetchProductsListPage, dispatch],
  );

  const onBlur = useCallback(() => {
    dispatch(ProductsPageActions.setSearch(''));
    dispatch(ProductsPageActions.setPage(1));
    debounceFetchProductsListPage();
  }, [debounceFetchProductsListPage, dispatch]);

  return (
    <div className={classNames(cls.SearchWrapper, {}, [className])}>
      <Input
        type={'text'}
        className={cls.InputSearch}
        value={search}
        onChange={onSearch}
        onBlur={onBlur}
        theme={InputTheme.OUTLINED}
      />
    </div>
  );
});
