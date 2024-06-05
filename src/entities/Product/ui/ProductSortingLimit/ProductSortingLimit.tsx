import { classNames } from '@/shared/lib/classNames/classNames';
import { memo, useCallback, useMemo } from 'react';
import cls from './ProductSortingLimit.module.scss';
import { Select } from '@/shared/ui/Select';
import {
  SelectOptions,
  SelectWidth,
  WrapperWidth,
} from '@/shared/ui/Select/Select/Select';
import { ISortLimit } from '@/shared/types/ISortOrder';
import { fetchProductsByBrand } from '../../model/services/fetchProductsByBrand';
import { ProductsActions } from '../../model/slices/ProductsSlice';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { useSelector } from 'react-redux';
import { useDebounce } from '@/shared/lib/hooks/useDebounce';
import { selectBrandId } from '@/entities/Brand';
import { selectCategoryId } from '@/entities/Category';
import { fetchProductsByCategory } from '../../model/services/fetchProductsByCategory';
import { FetchProductsByBrandAndCategory } from '../../model/services/FetchProductsByBrandAndCategory';
import { fetchProducts } from '../../model/services/fetchProducts';
import { selectLimit } from '../../model/selectors/selectProducts';

interface SortingLimitProps {
  className?: string;
}

export const ProductSortingLimit = memo((props: SortingLimitProps) => {
  const { className } = props;

  const dispatch = useAppDispatch();
  const value = useSelector(selectLimit);
  const brandId = useSelector(selectBrandId);
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
    if (categoryId) dispatch(fetchProductsByCategory({ categoryId }));
    if (brandId) dispatch(fetchProductsByBrand({ brandId }));
    if (categoryId && brandId) {
      dispatch(FetchProductsByBrandAndCategory({ categoryId, brandId }));
    }
    if (categoryId == 0) {
      dispatch(fetchProducts());
    }
  }, [brandId, categoryId, dispatch]);

  const debounceLimitOrder = useDebounce(fetchProductsList, 500);

  const onChange = (value: ISortLimit) => {
    dispatch(ProductsActions.setLimit(Number(value)));
    dispatch(ProductsActions.setPage(1));
    debounceLimitOrder();
  };

  return (
    <div className={classNames(cls.SortingLimit, {}, [className])}>
      <Select
        options={selectOptions}
        active={`${value}` as ISortLimit}
        onChange={onChange}
        label={'Показывать по'}
        WrapperWidth={WrapperWidth.XL}
        SelectWidth={SelectWidth.M}
      />
    </div>
  );
});
