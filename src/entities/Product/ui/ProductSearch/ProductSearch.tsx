import { memo, useCallback } from 'react';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { useSelector } from 'react-redux';
import { ProductsPageActions } from '../../model/slices/ProductsSlice';
import { fetchProducts } from '../../model/services/fetchProducts';
import { getSearchSelector } from '../../model/selectors/getProductsSelector';
import { BrandActions } from '@/entities/Brand';
import { CategoryActions } from '@/entities/Category';
import { Search } from '@/shared/ui/Search/Search';
import { classNames } from '@/shared/lib/classNames/classNames';

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

  const onSearch = useCallback(
    (search: string) => {
      dispatch(ProductsPageActions.setSearch(search));
      dispatch(ProductsPageActions.setPage(1));
    },
    [dispatch],
  );

  return (
    <Search
      className={classNames(``, {}, [className])}
      onValue={getProducts}
      onSearch={onSearch}
      search={search}
    />
  );
});
