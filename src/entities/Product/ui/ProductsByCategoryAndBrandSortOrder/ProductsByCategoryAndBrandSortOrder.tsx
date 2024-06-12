import { classNames } from '@/shared/lib/classNames/classNames';
import { memo, useCallback, useMemo } from 'react';
import cls from './ProductsByCategoryAndBrandSortOrder.module.scss';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { useSelector } from 'react-redux';
import {
  Select,
  SelectOptions,
  SelectWidth,
  WrapperWidth,
} from '@/shared/ui/Select/Select/Select';
import { ISortOrder } from '@/shared/types/ISortOrder';
import { useDebounce } from '@/shared/lib/hooks/useDebounce';
import { useParams } from 'react-router-dom';
import { selectProductsByCategoryAndBrandSort } from '../../model/selectors/selectProductsByCategoryAndBrand';
import { ProductsByCategoryAndBrandActions } from '../../model/slices/ProductsByCategoryAndBrandSlice';
import { useProductsByCategoryAndBrand } from '../../api/productsByCategoryAndBrandApi';

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

    const selectOptions = useMemo<SelectOptions<ISortOrder>[]>(
      () => [
        { value: 'asc', content: 'возрастанию' },
        { value: 'desc', content: 'убыванию' },
      ],
      [],
    );

    const fetchProductsList = useCallback(() => {
      fetchProductsByCategoryAndBrand({
        categoryId: Number(categoryId),
        brandId: Number(brandId),
      });
    }, [brandId, categoryId, fetchProductsByCategoryAndBrand]);

    const debounceFilterOrder = useDebounce(fetchProductsList, 500);

    const onChange = (value: ISortOrder) => {
      dispatch(ProductsByCategoryAndBrandActions.setSortingOrder(value));
      dispatch(ProductsByCategoryAndBrandActions.setPage(1));
      debounceFilterOrder();
    };

    return (
      <div
        className={classNames(cls.ProductsByCategoryAndBrandSortOrder, {}, [
          className,
        ])}
      >
        <Select<ISortOrder>
          options={selectOptions}
          label={'По'}
          active={sortOrder}
          onChange={onChange}
          WrapperWidth={WrapperWidth.XL}
          SelectWidth={SelectWidth.XL}
        />
      </div>
    );
  },
);
