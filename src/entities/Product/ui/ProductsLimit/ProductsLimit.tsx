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
import { ISortLimit } from '@/shared/types/ISortOrder';
import { useDebounce } from '@/shared/lib/hooks/useDebounce';
import { selectProductsLimit } from '../../model/selectors/selectProducts';
import { fetchProducts } from '../../model/services/fetchProducts';
import { ProductsActions } from '../../model/slices/ProductsSlice';

interface ProductsLimitProps {
  className?: string;
}

export const ProductsLimit = memo((props: ProductsLimitProps) => {
  const { className } = props;
  const dispatch = useAppDispatch();
  const limit = useSelector(selectProductsLimit);

  const selectOptions = useMemo<SelectOptions<ISortLimit>[]>(
    () => [
      { value: `5`, content: '5' },
      { value: `10`, content: '10' },
      { value: `20`, content: '20' },
    ],
    [],
  );

  const fetchProductsList = useCallback(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const debounceLimitOrder = useDebounce(fetchProductsList, 500);

  const onChange = useCallback(
    (value: ISortLimit) => {
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
        active={`${limit}` as ISortLimit}
        onChange={onChange}
        label={'Показывать по'}
        WrapperWidth={WrapperWidth.XL}
        SelectWidth={SelectWidth.M}
      />
    </div>
  );
});
