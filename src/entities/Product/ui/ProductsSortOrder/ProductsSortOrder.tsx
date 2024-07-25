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
import { useSearchParams } from 'react-router-dom';
import { SORT } from '@/shared/consts/urlParams';
import { useProductsSortOrder } from '../../lib/hooks/useProductsSortOrder';

interface ProductsSortOrderProps {
  className?: string;
}

export const ProductsSortOrder = memo((props: ProductsSortOrderProps) => {
  const { className } = props;
  const dispatch = useAppDispatch();
  const sortOrder = useSelector(selectProductsSortOrder);
  const [fetchProducts] = useProducts();
  const [searchParams] = useSearchParams();
  const urlParamSortOrder = searchParams.get(SORT) as TSortOrder;

  const { sort, selectOptions, onChange } = useProductsSortOrder({
    onFetchCb,
    onChangeCb,
    sort: sortOrder,
  });

  function onFetchCb() {
    fetchProducts({ sort });
  }

  function onChangeCb(value: TSortOrder) {
    dispatch(ProductsActions.setSortingOrder(value));
    dispatch(ProductsActions.setPage(1));
  }

  const isSortOrder = urlParamSortOrder ? urlParamSortOrder : sort;

  return (
    <div className={classNames(cls.ProductsSortOrder, {}, [className])}>
      <Select<TSortOrder>
        options={selectOptions}
        label={'По'}
        active={isSortOrder}
        onChange={onChange}
        WrapperWidth={WrapperWidth.XL}
        SelectWidth={SelectWidth.XL}
      />
    </div>
  );
});

ProductsSortOrder.displayName = `ProductsSortOrder`;
