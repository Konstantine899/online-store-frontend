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
import { ProductsByCategoryActions } from '../../model/slices/ProductsByCategorySlice';
import { selectProductsByCategorySort } from '../../model/selectors/selectProductsByCategory';
import { useProductsByCategory } from '../../api/productsByCategoryApi';

interface ProductsByCategorySortOrderProps {
  className?: string;
}

export const ProductsByCategorySortOrder = memo(
  (props: ProductsByCategorySortOrderProps) => {
    const { className } = props;
    const dispatch = useAppDispatch();
    const categoryId = useSelector(selectCategoryId);
    const sort = useSelector(selectProductsByCategorySort);
    const [fetchProductsByCategory] = useProductsByCategory();

    const selectOptions = useMemo<SelectOptions<ISortOrder>[]>(
      () => [
        { value: 'asc', content: 'возрастанию' },
        { value: 'desc', content: 'убыванию' },
      ],
      [],
    );

    const fetchProductsList = useCallback(() => {
      fetchProductsByCategory({ categoryId, sort });
    }, [categoryId, fetchProductsByCategory, sort]);

    const debounceFilterOrder = useDebounce(fetchProductsList, 500);

    const onChange = (value: ISortOrder) => {
      dispatch(ProductsByCategoryActions.setSortingOrder(value));
      dispatch(ProductsByCategoryActions.setPage(1));
      debounceFilterOrder();
    };

    return (
      <div
        className={classNames(cls.ProductsByCategorySortOrder, {}, [className])}
      >
        <Select<ISortOrder>
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
