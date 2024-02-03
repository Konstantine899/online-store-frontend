import { classNames } from '@/shared/lib/classNames/classNames';
import { memo, useCallback } from 'react';
import cls from './Search.module.scss';
import { Input, InputTheme } from '@/shared/ui/Input/Input';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { FiltersActions } from '../../model/slices/FiltersSlice';
import { useSelector } from 'react-redux';
import { getSearchSelector } from '../../model/selectors/getFilters';
import { fetchProductsListPage } from '@/pages/ProductsPage/model/services/fetchProductsListPage/fetchProductsListPage';
import { ProductsPageActions } from '@/pages/ProductsPage/model/slices/ProductsPageSlice';

interface SearchProps {
  className?: string;
}

export const Search = memo((props: SearchProps) => {
  const { className } = props;

  const dispatch = useAppDispatch();
  const search = useSelector(getSearchSelector);

  const onSearch = useCallback(
    (search: string) => {
      dispatch(FiltersActions.setSearch(search));
      dispatch(ProductsPageActions.setPage(1));
      dispatch(fetchProductsListPage());
    },
    [dispatch],
  );

  const onBlur = useCallback(() => {
    dispatch(FiltersActions.setSearch(''));
    dispatch(fetchProductsListPage());
    dispatch(ProductsPageActions.setPage(1));
  }, [dispatch]);

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
