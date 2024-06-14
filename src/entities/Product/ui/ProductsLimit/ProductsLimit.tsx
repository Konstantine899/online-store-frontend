import { classNames } from '@/shared/lib/classNames/classNames';
import { memo, useCallback, useMemo } from 'react';
import cls from './ProductsLimit.module.scss';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import {
  Select,
  SelectOptions,
  SelectWidth,
  WrapperWidth,
} from '@/shared/ui/Select/Select/Select';
import { useDebounce } from '@/shared/lib/hooks/useDebounce';
import { selectProductsLimit } from '../../model/selectors/selectProducts';
import { ProductsActions } from '../../model/slices/ProductsSlice';
import { useProducts } from '../../api/productsApi';
import { TSortLimit } from '../../model/types/IProductsSchema';

interface ProductsLimitProps {
  className?: string;
}

export const ProductsLimit = memo((props: ProductsLimitProps) => {
  const { className } = props;
  const dispatch = useAppDispatch();
  const limit = useSelector(selectProductsLimit);
  const [fetchProducts] = useProducts();

  const selectOptions = useMemo<SelectOptions<TSortLimit>[]>(
    () => [
      { value: `5`, content: '5' },
      { value: `10`, content: '10' },
      { value: `20`, content: '20' },
    ],
    [],
  );

  const fetchProductsList = useCallback(() => {
    fetchProducts({ limit });
  }, [fetchProducts, limit]);

  const debounceLimitOrder = useDebounce(fetchProductsList, 500);

  const onChange = useCallback(
    (value: TSortLimit) => {
      dispatch(ProductsActions.setLimit(Number(value)));
      dispatch(ProductsActions.setPage(1));
      debounceLimitOrder();
    },
    [debounceLimitOrder, dispatch],
  );

  return (
    <div className={classNames(cls.SortingLimit, {}, [className])}>
      <Select
        options={selectOptions}
        active={`${limit}` as TSortLimit}
        onChange={onChange}
        label={'Показывать по'}
        WrapperWidth={WrapperWidth.XL}
        SelectWidth={SelectWidth.M}
      />
    </div>
  );
});
