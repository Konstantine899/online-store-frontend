import { classNames } from '@/shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './ProductsByCategoryAndBrandSortOrder.module.scss';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { useSelector } from 'react-redux';
import {
  Select,
  SelectWidth,
  WrapperWidth,
} from '@/shared/ui/Select/Select/Select';
import { useParams } from 'react-router-dom';
import { selectProductsByCategoryAndBrandSort } from '../../model/selectors/selectProductsByCategoryAndBrand';
import { ProductsByCategoryAndBrandActions } from '../../model/slices/ProductsByCategoryAndBrandSlice';
import { useProductsByCategoryAndBrand } from '../../api/productsApi';
import { TSortOrder } from '../../model/types/IProductsSchema';
import { useProductsSortOrder } from '../../lib/hooks/useProductsSortOrder';

interface ProductsByCategoryAndBrandSortOrderProps {
  className?: string;
}

export const ProductsByCategoryAndBrandSortOrder = memo(
  (props: ProductsByCategoryAndBrandSortOrderProps) => {
    const { className } = props;
    const dispatch = useAppDispatch();
    const sortOrder = useSelector(selectProductsByCategoryAndBrandSort);
    const { brandId, categoryId } = useParams();
    const [fetchProductsByCategoryAndBrand] = useProductsByCategoryAndBrand();

    const { sort, selectOptions, onChange } = useProductsSortOrder({
      sort: sortOrder,
      onFetchCb,
      onChangeCb,
    });

    function onFetchCb() {
      fetchProductsByCategoryAndBrand({
        categoryId: Number(categoryId),
        brandId: Number(brandId),
      });
    }

    function onChangeCb(value: TSortOrder) {
      dispatch(ProductsByCategoryAndBrandActions.setSortingOrder(value));
      dispatch(ProductsByCategoryAndBrandActions.setPage(1));
    }

    return (
      <div
        className={classNames(cls.ProductsByCategoryAndBrandSortOrder, {}, [
          className,
        ])}
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

ProductsByCategoryAndBrandSortOrder.displayName = `ProductsByCategoryAndBrandSortOrder`;
