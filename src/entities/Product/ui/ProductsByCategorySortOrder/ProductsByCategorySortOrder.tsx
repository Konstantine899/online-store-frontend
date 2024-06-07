import { classNames } from '@/shared/lib/classNames/classNames';
import { memo, useCallback, useMemo } from 'react';
import cls from './ProductsByCategorySortOrder.module.scss';
import { useSelector } from 'react-redux';
import { selectCategoryId } from '@/entities/Category';
import {
  Select,
  SelectOptions,
  SelectWidth,
  WrapperWidth,
} from '@/shared/ui/Select/Select/Select';
import { ISortOrder } from '@/shared/types/ISortOrder';
import { useDebounce } from '@/shared/lib/hooks/useDebounce';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { fetchProductsByCategory } from '../../model/services/fetchProductsByCategory';
import { ProductsByCategoryActions } from '../../model/slices/ProductsByCategorySlice';
import {
  selectProductsByCategory,
  selectProductsByCategorySort,
} from '../../model/selectors/selectProductsByCategory';

interface ProductsByCategorySortOrderProps {
  className?: string;
}

export const ProductsByCategorySortOrder = memo(
  (props: ProductsByCategorySortOrderProps) => {
    const { className } = props;
    const dispatch = useAppDispatch();
    const products = useSelector(selectProductsByCategory);
    const categoryId = useSelector(selectCategoryId);
    const setOrder = useSelector(selectProductsByCategorySort);

    const selectOptions = useMemo<SelectOptions<ISortOrder>[]>(
      () => [
        { value: 'asc', content: 'возрастанию' },
        { value: 'desc', content: 'убыванию' },
      ],
      [],
    );

    const fetchProductsList = useCallback(() => {
      dispatch(fetchProductsByCategory({ categoryId }));
    }, [categoryId, dispatch]);

    const debounceFilterOrder = useDebounce(fetchProductsList, 500);

    const onChange = (value: ISortOrder) => {
      dispatch(ProductsByCategoryActions.setSortingOrder(value));
      dispatch(ProductsByCategoryActions.setPage(1));
      debounceFilterOrder();
    };

    if (products.length > 0) {
      return (
        <div
          className={classNames(cls.ProductsByCategorySortOrder, {}, [
            className,
          ])}
        >
          <Select<ISortOrder>
            options={selectOptions}
            label={'По'}
            active={setOrder}
            onChange={onChange}
            WrapperWidth={WrapperWidth.XL}
            SelectWidth={SelectWidth.XL}
          />
        </div>
      );
    }
  },
);
