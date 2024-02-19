import { memo, useCallback, useMemo } from 'react';
import { useSelector } from 'react-redux';
import cls from './SortingOrder.module.scss';
import {
  FetchProducts,
  FetchProductsByBrand,
  ProductsPageActions,
} from '@/entities/Product';
import { useDebounce } from '@/shared/lib/hooks/useDebounce';
import {
  OptionsWidth,
  Select,
  SelectButtonWidth,
  SelectOptions,
  SelectSize,
  SelectWidth,
  SelectWrapperWidth,
} from '@/shared/ui/Select/Select/Select';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { ISortOrder } from '@/shared/types/ISortOrder';
import { classNames } from '@/shared/lib/classNames/classNames';
import { getBrandSelector } from '@/entities/Brand';
import { getSortOrderSelector } from '../../model/selectors/getFilters';
import { FiltersActions } from '../../model/slices/FiltersSlice';

interface SortingOrderProps {
  className?: string;
}

export const SortingOrder = memo((props: SortingOrderProps) => {
  const { className } = props;

  const dispatch = useAppDispatch();
  const value = useSelector(getSortOrderSelector);
  const brandId = useSelector(getBrandSelector);

  const selectOptions = useMemo<SelectOptions<ISortOrder>[]>(
    () => [
      { value: 'asc', content: 'возрастанию' },
      { value: 'desc', content: 'убыванию' },
    ],
    [],
  );

  const fetchProductsList = useCallback(() => {
    if (brandId) return dispatch(FetchProductsByBrand({ brandId }));
    dispatch(FetchProducts());
  }, [brandId, dispatch]);

  const debounceFilterOrder = useDebounce(fetchProductsList, 500);

  const onChange = (value: ISortOrder) => {
    dispatch(FiltersActions.setSortingOrder(value));
    dispatch(ProductsPageActions.setPage(1));
    debounceFilterOrder();
  };

  return (
    <div className={classNames(cls.SortingOrder, {}, [className])}>
      <Select<ISortOrder>
        options={selectOptions}
        label={'По'}
        value={value}
        onChange={onChange}
        size={SelectSize.M}
        SelectWrapperWidth={SelectWrapperWidth.SELECT_WRAPPER_FULL_WIDTH}
        SelectWidth={SelectWidth.SELECT_FULL_WIDTH}
        ButtonWidth={SelectButtonWidth.SELECT_BUTTON_FULL_WIDTH}
        OptionsWidth={OptionsWidth.OPTIONS_FULL_WIDTH}
      />
    </div>
  );
});
