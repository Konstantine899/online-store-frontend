import { classNames } from '@/shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './ProductsLimit.module.scss';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import {
  Select,
  SelectWidth,
  WrapperWidth,
} from '@/shared/ui/Select/Select/Select';

import { Skeleton } from '@/shared/ui/Skeleton';
import { useSelector } from 'react-redux';
import {
  ProductsActions,
  selectProductsLimit,
  useProducts,
  useProductsContext,
  useProductsLimit,
} from '@/entities/Product';
import { TSortLimit } from '@/entities/Product/model/types/IProductsSchema';

interface ProductsLimitProps {
  className?: string;
}

export const ProductsLimit = memo((props: ProductsLimitProps) => {
  const { className } = props;
  const dispatch = useAppDispatch();
  const productsLimit = useSelector(selectProductsLimit);
  const [fetchProducts] = useProducts();
  const { products, isSuccess, isLoading } = useProductsContext();

  const { onChange, selectOptions, limit } = useProductsLimit({
    onFetchCb: fetchCb,
    onChangeCb: onChangeCb,
    limitFromState: productsLimit,
  });

  function fetchCb(limit: number) {
    fetchProducts({ limit: Number(limit) });
  }

  function onChangeCb(value: TSortLimit) {
    dispatch(ProductsActions.setLimit(Number(value)));
    dispatch(ProductsActions.setPage(1));
  }

  if (isLoading) {
    return (
      <div className={classNames(cls.SortingLimit, {}, [className])}>
        <Skeleton width={250} height={34} borderRadius={'10px'} />
      </div>
    );
  }

  if (isSuccess && products!.rows.length > 0) {
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
  }
});

ProductsLimit.displayName = `ProductsLimit`;
