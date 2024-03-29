import { classNames } from '@/shared/lib/classNames/classNames';
import { memo, useCallback, useMemo } from 'react';
import cls from './ProductSortingLimit.module.scss';
import { Select } from '@/shared/ui/Select';
import {
  OptionsWidth,
  SelectButtonWidth,
  SelectOptions,
  SelectSize,
  SelectWidth,
  SelectWrapperWidth,
} from '@/shared/ui/Select/Select/Select';
import { ISortLimit } from '@/shared/types/ISortOrder';
import { FetchProductsByBrand } from '../../model/services/FetchProductsByBrand';
import { getLimitSelector } from '../../model/selectors/getProductsSelector';
import { ProductsPageActions } from '../../model/slices/ProductsSlice';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { useSelector } from 'react-redux';
import { useDebounce } from '@/shared/lib/hooks/useDebounce';
import { getBrandIdSelector } from '@/entities/Brand';
import { getCategoryIdSelector } from '@/entities/Category';
import { FetchProductsByCategory } from '../../model/services/FetchProductsByCategory';

interface SortingLimitProps {
  className?: string;
}

export const ProductSortingLimit = memo((props: SortingLimitProps) => {
  const { className } = props;

  const dispatch = useAppDispatch();
  const value = useSelector(getLimitSelector);
  const brandId = useSelector(getBrandIdSelector);
  const categoryId = useSelector(getCategoryIdSelector);

  const selectOptions = useMemo<SelectOptions<ISortLimit>[]>(
    () => [
      { value: `5`, content: '5' },
      { value: `10`, content: '10' },
      { value: `20`, content: '20' },
    ],
    [],
  );

  const fetchProductsList = useCallback(() => {
    if (categoryId) dispatch(FetchProductsByCategory({ categoryId }));
    if (brandId) dispatch(FetchProductsByBrand({ brandId }));
  }, [brandId, categoryId, dispatch]);

  const debounceLimitOrder = useDebounce(fetchProductsList, 500);

  const onChange = (value: ISortLimit) => {
    dispatch(ProductsPageActions.setLimit(Number(value)));
    dispatch(ProductsPageActions.setPage(1));
    debounceLimitOrder();
  };

  return (
    <div className={classNames(cls.SortingLimit, {}, [className])}>
      <Select
        options={selectOptions}
        value={`${value}`}
        onChange={onChange}
        label={'Показывать по'}
        size={SelectSize.M}
        SelectWrapperWidth={SelectWrapperWidth.SELECT_WRAPPER_FULL_WIDTH}
        SelectWidth={SelectWidth.SELECT_HALF_WIDTH}
        ButtonWidth={SelectButtonWidth.SELECT_BUTTON_HALF_WIDTH}
        OptionsWidth={OptionsWidth.OPTIONS_HALF_WIDTH}
      />
    </div>
  );
});
