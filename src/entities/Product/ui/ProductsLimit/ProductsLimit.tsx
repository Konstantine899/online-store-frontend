import { classNames } from '@/shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './ProductsLimit.module.scss';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import {
  Select,
  SelectWidth,
  WrapperWidth,
} from '@/shared/ui/Select/Select/Select';
import { ProductsActions } from '../../model/slices/ProductsSlice';
import { useProducts } from '../../api/productsApi';
import { TSortLimit } from '../../model/types/IProductsSchema';
import { useProductsLimit } from '../../lib/hooks/useProductsLimit';

interface ProductsLimitProps {
  className?: string;
}

export const ProductsLimit = memo((props: ProductsLimitProps) => {
  const { className } = props;
  const dispatch = useAppDispatch();
  const [fetchProducts] = useProducts();

  const { onChange, selectOptions, limit } = useProductsLimit({
    onFetchCb: fetchCb,
    onChangeCb: onChangeCb,
  });

  function fetchCb(limit: number) {
    fetchProducts({ limit: Number(limit) });
  }

  function onChangeCb(value: TSortLimit) {
    dispatch(ProductsActions.setLimit(Number(value)));
    dispatch(ProductsActions.setPage(1));
  }

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

ProductsLimit.displayName = `ProductsLimit`;
