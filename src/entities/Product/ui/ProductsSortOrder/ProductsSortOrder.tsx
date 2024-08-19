import { classNames } from '@/shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './ProductsSortOrder.module.scss';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { useSelector } from 'react-redux';
import {
  Select,
  SelectWidth,
  WrapperWidth,
} from '@/shared/ui/Select/Select/Select';
import { selectProductsSortOrder } from '../../model/selectors/selectProducts';
import { ProductsActions } from '../../model/slices/ProductsSlice';
import { useProducts } from '../../api/productsApi';
import { TSortOrder } from '../../model/types/IProductsSchema';
import { useProductsSortOrder } from '../../lib/hooks/useProductsSortOrder';
import { useProductsContext } from '@/entities/Product';
import { Skeleton } from '@/shared/ui/Skeleton';

interface ProductsSortOrderProps {
  className?: string;
}

export const ProductsSortOrder = memo((props: ProductsSortOrderProps) => {
  const { className } = props;
  const dispatch = useAppDispatch();
  const sortOrder = useSelector(selectProductsSortOrder);
  const [fetchProducts] = useProducts();
  const { products, isSuccess, isLoading } = useProductsContext();

  const { sort, selectOptions, onChange } = useProductsSortOrder({
    onFetchCb,
    onChangeCb,
    sortFromState: sortOrder,
  });

  function onFetchCb() {
    fetchProducts({ sort });
  }

  function onChangeCb(value: TSortOrder) {
    dispatch(ProductsActions.setSortingOrder(value));
    dispatch(ProductsActions.setPage(1));
  }

  if (isLoading) {
    return (
      <div className={classNames(cls.ProductsSortOrder, {}, [className])}>
        <Skeleton width={250} height={34} borderRadius={'10px'} />
      </div>
    );
  }

  if (isSuccess && products!.rows.length > 0) {
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
  }
});

ProductsSortOrder.displayName = `ProductsSortOrder`;
