import { classNames } from '@/shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './ProductsByCategoryAndBrandLimit.module.scss';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { useSelector } from 'react-redux';

import {
  Select,
  SelectWidth,
  WrapperWidth,
} from '@/shared/ui/Select/Select/Select';
import { useParams } from 'react-router-dom';
import { ProductsByCategoryAndBrandActions } from '../../model/slices/ProductsByCategoryAndBrandSlice';
import { selectProductsByCategoryAndBrandLimit } from '../../model/selectors/selectProductsByCategoryAndBrand';
import { useProductsByCategoryAndBrand } from '../../api/productsApi';
import { TSortLimit } from '../../model/types/IProductsSchema';
import { useProductsLimit } from '../../lib/hooks/useProductsLimit';

interface ProductsByCategoryAndBrandLimitProps {
  className?: string;
}

export const ProductsByCategoryAndBrandLimit = memo(
  (props: ProductsByCategoryAndBrandLimitProps) => {
    const { className } = props;

    const dispatch = useAppDispatch();
    const productsByCategoryLimit = useSelector(
      selectProductsByCategoryAndBrandLimit,
    );
    const { brandId, categoryId } = useParams();
    const [fetchProductsByCategoryAndBrand] = useProductsByCategoryAndBrand();

    const { limit, selectOptions, onChange } = useProductsLimit({
      limit: productsByCategoryLimit,
      onFetchCb,
      onChangeCb,
    });

    function onFetchCb() {
      fetchProductsByCategoryAndBrand({
        categoryId: Number(categoryId),
        brandId: Number(brandId),
      });
    }

    function onChangeCb(value: TSortLimit) {
      dispatch(ProductsByCategoryAndBrandActions.setLimit(Number(value)));
      dispatch(ProductsByCategoryAndBrandActions.setPage(1));
    }

    return (
      <div
        className={classNames(cls.ProductsByCategoryAndBrandLimit, {}, [
          className,
        ])}
      >
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
  },
);

ProductsByCategoryAndBrandLimit.displayName = `ProductsByCategoryAndBrandLimit`;
