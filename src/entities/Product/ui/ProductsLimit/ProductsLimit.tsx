import { classNames } from '@/shared/lib/classNames/classNames';
import { memo, useCallback, useMemo } from 'react';
import cls from './ProductsLimit.module.scss';
import {
  Select,
  SelectOptions,
  SelectWidth,
  WrapperWidth,
} from '@/shared/ui/Select/Select/Select';
import { ISortLimit, ISortOrder } from '@/shared/types/ISortOrder';
import { useDebounce } from '@/shared/lib/hooks/useDebounce';
import {
  fetchProducts,
  fetchProductsByBrand,
  FetchProductsByBrandAndCategory,
  fetchProductsByCategory,
  ProductsActions,
} from '@/entities/Product';

interface ProductsLimitProps {
  className?: string;
  onProductsLimit: () => void;
  onChangeLimit: (value: ISortLimit) => void;
  limit: ISortLimit;
}

export const ProductsLimit = memo((props: ProductsLimitProps) => {
  const { className, onProductsLimit, onChangeLimit, limit } = props;

  const selectOptions = useMemo<SelectOptions<ISortLimit>[]>(
    () => [
      { value: `5`, content: '5' },
      { value: `10`, content: '10' },
      { value: `20`, content: '20' },
    ],
    [],
  );

  const fetchProductsList = useCallback(() => {
    onProductsLimit();
  }, [onProductsLimit]);

  const debounceLimitOrder = useDebounce(fetchProductsList, 500);

  const onChange = useCallback(
    (value: ISortLimit) => {
      onChangeLimit(value);
      debounceLimitOrder();
    },
    [debounceLimitOrder, onChangeLimit],
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
