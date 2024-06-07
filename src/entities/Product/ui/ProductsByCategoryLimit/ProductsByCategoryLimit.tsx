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
import { ISortLimit } from '@/shared/types/ISortOrder';
import { useDebounce } from '@/shared/lib/hooks/useDebounce';
import { fetchProductsByCategory } from '../../model/services/fetchProductsByCategory';
import {
  selectProductsByCategory,
  selectProductsByCategoryLimit,
} from '../../model/selectors/selectProductsByCategoryState';
import { ProductsByCategoryActions } from '../../model/slices/ProductsByCategorySlice';

interface ProductsByCategoryLimitProps {
  className?: string;
}

export const ProductsByCategoryLimit = memo(
  (props: ProductsByCategoryLimitProps) => {
    const { className } = props;

    const dispatch = useAppDispatch();
    const limit = useSelector(selectProductsByCategoryLimit);
    const products = useSelector(selectProductsByCategory);
    const categoryId = useSelector(selectCategoryId);

    const selectOptions = useMemo<SelectOptions<ISortLimit>[]>(
      () => [
        { value: `5`, content: '5' },
        { value: `10`, content: '10' },
        { value: `20`, content: '20' },
      ],
      [],
    );

    const fetchProductsList = useCallback(() => {
      dispatch(fetchProductsByCategory({ categoryId }));
    }, [categoryId, dispatch]);

    const debounceLimitOrder = useDebounce(fetchProductsList, 500);

    const onChange = (value: ISortLimit) => {
      dispatch(ProductsByCategoryActions.setLimit(Number(value)));
      dispatch(ProductsByCategoryActions.setPage(1));
      debounceLimitOrder();
    };

    if (products.length > 0) {
      return (
        <div
          className={classNames(cls.ProductsByCategoryLimit, {}, [className])}
        >
          <Select
            options={selectOptions}
            active={`${limit}` as ISortLimit}
            onChange={onChange}
            label={'Показывать по'}
            WrapperWidth={WrapperWidth.XL}
            SelectWidth={SelectWidth.M}
          />
        </div>
      );
    }
  },
);
