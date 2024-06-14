import { classNames } from '@/shared/lib/classNames/classNames';
import { memo, useCallback, useMemo } from 'react';
import cls from './ProductsSortOrder.module.scss';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { useSelector } from 'react-redux';
import {
  Select,
  SelectOptions,
  SelectWidth,
  WrapperWidth,
} from '@/shared/ui/Select/Select/Select';
import { useDebounce } from '@/shared/lib/hooks/useDebounce';
import { selectProductsSortOrder } from '../../model/selectors/selectProducts';
import { ProductsActions } from '../../model/slices/ProductsSlice';
import { useProducts } from '../../api/productsApi';
import { TSortOrder } from '../../model/types/IProductsSchema';

interface ProductsSortOrderProps {
  className?: string;
}

export const ProductsSortOrder = memo((props: ProductsSortOrderProps) => {
  const { className } = props;
  const dispatch = useAppDispatch();
  const sort = useSelector(selectProductsSortOrder);
  const [fetchProducts] = useProducts();

  const selectOptions = useMemo<SelectOptions<TSortOrder>[]>(
    () => [
      { value: 'asc', content: 'возрастанию' },
      { value: 'desc', content: 'убыванию' },
    ],
    [],
  );

  const fetchSortingOrder = useCallback(() => {
    fetchProducts({ sort });
  }, [fetchProducts, sort]);

  const debounceFilterOrder = useDebounce(fetchSortingOrder, 500);

  const onChange = useCallback(
    (value: TSortOrder) => {
      dispatch(ProductsActions.setSortingOrder(value));
      dispatch(ProductsActions.setPage(1));
      debounceFilterOrder();
    },
    [debounceFilterOrder, dispatch],
  );

  return (
    <div className={classNames(cls.ProductsSortOrder, {}, [className])}>
      <Select<TSortOrder>
        options={selectOptions}
        label={'По'}
        active={sort}
        onChange={onChange}
        WrapperWidth={WrapperWidth.XL}
        SelectWidth={SelectWidth.XL}
      />
    </div>
  );
});
