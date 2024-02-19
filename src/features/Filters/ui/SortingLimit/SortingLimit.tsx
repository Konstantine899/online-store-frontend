import { classNames } from '@/shared/lib/classNames/classNames';
import { memo, useCallback, useMemo } from 'react';
import cls from './SortingLimit.module.scss';
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
import {
  FetchProducts,
  FetchProductsByBrand,
  getLimitSelector,
  ProductsPageActions,
} from '@/entities/Product';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { useSelector } from 'react-redux';
import { getBrandSelector } from '@/entities/Brand';
import { useDebounce } from '@/shared/lib/hooks/useDebounce';

interface SortingLimitProps {
  className?: string;
}

export const SortingLimit = memo((props: SortingLimitProps) => {
  const { className } = props;

  const dispatch = useAppDispatch();
  const value = useSelector(getLimitSelector);
  const brandId = useSelector(getBrandSelector);

  const selectOptions = useMemo<SelectOptions<ISortLimit>[]>(
    () => [
      { value: `5`, content: '5' },
      { value: `10`, content: '10' },
      { value: `20`, content: '20' },
    ],
    [],
  );

  const fetchProductsList = useCallback(() => {
    if (brandId) return dispatch(FetchProductsByBrand({ brandId }));
    dispatch(FetchProducts());
  }, [brandId, dispatch]);

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
