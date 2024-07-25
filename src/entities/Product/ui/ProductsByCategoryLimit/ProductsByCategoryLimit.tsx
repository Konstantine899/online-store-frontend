import { classNames } from '@/shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './ProductsByCategoryLimit.module.scss';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { useSelector } from 'react-redux';
import { selectCategoryId } from '@/entities/Category';
import {
  Select,
  SelectWidth,
  WrapperWidth,
} from '@/shared/ui/Select/Select/Select';
import { selectProductsByCategoryLimit } from '../../model/selectors/selectProductsByCategory';
import { ProductsByCategoryActions } from '../../model/slices/ProductsByCategorySlice';
import { useProductsByCategory } from '../../api/productsApi';
import { TSortLimit } from '../../model/types/IProductsSchema';
import { useProductsLimit } from '../../lib/hooks/useProductsLimit';

interface ProductsByCategoryLimitProps {
  className?: string;
}

export const ProductsByCategoryLimit = memo(
  (props: ProductsByCategoryLimitProps) => {
    const { className } = props;

    const dispatch = useAppDispatch();
    const productsByCategoryLimit = useSelector(selectProductsByCategoryLimit);
    const categoryId = useSelector(selectCategoryId);
    const [fetchProductsByCategory] = useProductsByCategory();

    const { limit, onChange, selectOptions } = useProductsLimit({
      onFetchCb,
      onChangeCb,
      limit: productsByCategoryLimit,
    });

    function onFetchCb() {
      fetchProductsByCategory({ categoryId, limit: Number(limit) });
    }

    function onChangeCb(limit: TSortLimit) {
      dispatch(ProductsByCategoryActions.setLimit(Number(limit)));
      dispatch(ProductsByCategoryActions.setPage(1));
    }

    return (
      <div className={classNames(cls.ProductsByCategoryLimit, {}, [className])}>
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

ProductsByCategoryLimit.displayName = `ProductsByCategoryLimit`;
