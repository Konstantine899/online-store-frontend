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

interface ProductsSortOrderProps {
  className?: string;
}

export const ProductsSortOrder = memo((props: ProductsSortOrderProps) => {
  const { className } = props;
  const dispatch = useAppDispatch();
  const sortOrder = useSelector(selectProductsSortOrder);
  const [fetchProducts] = useProducts();

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

ProductsSortOrder.displayName = `ProductsSortOrder`;
