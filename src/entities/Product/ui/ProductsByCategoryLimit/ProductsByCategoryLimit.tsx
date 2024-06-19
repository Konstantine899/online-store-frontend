import { classNames } from '@/shared/lib/classNames/classNames';
import { memo, useCallback, useMemo } from 'react';
import cls from './ProductsByCategoryLimit.module.scss';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { useSelector } from 'react-redux';
import { selectCategoryId } from '@/entities/Category';
import {
  Select,
  SelectOptions,
  SelectWidth,
  WrapperWidth,
} from '@/shared/ui/Select/Select/Select';
import { useDebounce } from '@/shared/lib/hooks/useDebounce';
import { selectProductsByCategoryLimit } from '../../model/selectors/selectProductsByCategory';
import { ProductsByCategoryActions } from '../../model/slices/ProductsByCategorySlice';
import { useProductsByCategory } from '../../api/productsApi';
import { TSortLimit } from '../../model/types/IProductsSchema';

interface ProductsByCategoryLimitProps {
  className?: string;
}

export const ProductsByCategoryLimit = memo(
  (props: ProductsByCategoryLimitProps) => {
    const { className } = props;

    const dispatch = useAppDispatch();
    const limit = useSelector(selectProductsByCategoryLimit);
    const categoryId = useSelector(selectCategoryId);
    const [fetchProductsByCategory] = useProductsByCategory();

    const selectOptions = useMemo<SelectOptions<TSortLimit>[]>(
      () => [
        { value: `5`, content: '5' },
        { value: `10`, content: '10' },
        { value: `20`, content: '20' },
      ],
      [],
    );

    const fetchProductsList = useCallback(() => {
      fetchProductsByCategory({ categoryId, limit });
    }, [categoryId, fetchProductsByCategory, limit]);

    const debounceLimitOrder = useDebounce(fetchProductsList, 500);

    const onChange = (value: TSortLimit) => {
      dispatch(ProductsByCategoryActions.setLimit(Number(value)));
      dispatch(ProductsByCategoryActions.setPage(1));
      debounceLimitOrder();
    };

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
