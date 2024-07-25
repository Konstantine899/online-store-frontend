import { classNames } from '@/shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './ProductsByCategorySortOrder.module.scss';
import { useSelector } from 'react-redux';
import { selectCategoryId } from '@/entities/Category';
import {
  Select,
  SelectWidth,
  WrapperWidth,
} from '@/shared/ui/Select/Select/Select';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { ProductsByCategoryActions } from '../../model/slices/ProductsByCategorySlice';
import { selectProductsByCategorySort } from '../../model/selectors/selectProductsByCategory';
import { useProductsByCategory } from '../../api/productsApi';
import { TSortOrder } from '../../model/types/IProductsSchema';
import { useProductsSortOrder } from '../../lib/hooks/useProductsSortOrder';

interface ProductsByCategorySortOrderProps {
  className?: string;
}

export const ProductsByCategorySortOrder = memo(
  (props: ProductsByCategorySortOrderProps) => {
    const { className } = props;
    const dispatch = useAppDispatch();
    const categoryId = useSelector(selectCategoryId);
    const productsByCategorySortOrder = useSelector(
      selectProductsByCategorySort,
    );
    const [fetchProductsByCategory] = useProductsByCategory();

    const { onChange, selectOptions, sort } = useProductsSortOrder({
      sort: productsByCategorySortOrder,
      onFetchCb,
      onChangeCb,
    });

    function onFetchCb() {
      fetchProductsByCategory({ categoryId, sort });
    }

    function onChangeCb(value: TSortOrder) {
      dispatch(ProductsByCategoryActions.setSortingOrder(value));
      dispatch(ProductsByCategoryActions.setPage(1));
    }

    return (
      <div
        className={classNames(cls.ProductsByCategorySortOrder, {}, [className])}
      >
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
  },
);

ProductsByCategorySortOrder.displayName = `ProductsByCategorySortOrder`;
