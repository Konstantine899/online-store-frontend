import { memo, useCallback, useMemo } from 'react';
import { useSelector } from 'react-redux';
import cls from './ProductSortingOrder.module.scss';
import { FetchProductsByBrand } from '../../model/services/FetchProductsByBrand';
import { selectSortOrder } from '../../model/selectors/selectProducts';
import { ProductsActions } from '../../model/slices/ProductsSlice';
import { useDebounce } from '@/shared/lib/hooks/useDebounce';
import {
  Select,
  SelectOptions,
  SelectWidth,
  WrapperWidth,
} from '@/shared/ui/Select/Select/Select';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { ISortOrder } from '@/shared/types/ISortOrder';
import { classNames } from '@/shared/lib/classNames/classNames';
import { selectBrandId } from '@/entities/Brand';
import { selectCategoryId } from '@/entities/Category';
import { FetchProductsByCategory } from '../../model/services/FetchProductsByCategory';
import { fetchProducts } from '../../model/services/fetchProducts';
import { FetchProductsByBrandAndCategory } from '../../model/services/FetchProductsByBrandAndCategory';

interface SortingOrderProps {
  className?: string;
}

export const ProductSortingOrder = memo((props: SortingOrderProps) => {
  const { className } = props;

  const dispatch = useAppDispatch();
  const sortOrder = useSelector(selectSortOrder);
  const brandId = useSelector(selectBrandId);
  const categoryId = useSelector(selectCategoryId);

  const selectOptions = useMemo<SelectOptions<ISortOrder>[]>(
    () => [
      { value: 'asc', content: 'возрастанию' },
      { value: 'desc', content: 'убыванию' },
    ],
    [],
  );

  const fetchProductsList = useCallback(() => {
    if (categoryId) return dispatch(FetchProductsByCategory({ categoryId }));
    if (brandId) return dispatch(FetchProductsByBrand({ brandId }));
    if (categoryId && brandId) {
      dispatch(FetchProductsByBrandAndCategory({ categoryId, brandId }));
    }
    dispatch(fetchProducts());
  }, [brandId, categoryId, dispatch]);

  const debounceFilterOrder = useDebounce(fetchProductsList, 500);

  const onChange = (value: ISortOrder) => {
    dispatch(ProductsActions.setSortingOrder(value));
    dispatch(ProductsActions.setPage(1));
    debounceFilterOrder();
  };

  return (
    <div className={classNames(cls.SortingOrder, {}, [className])}>
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
});
