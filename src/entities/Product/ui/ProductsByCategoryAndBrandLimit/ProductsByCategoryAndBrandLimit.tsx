import { classNames } from '@/shared/lib/classNames/classNames';
import { memo, useCallback, useMemo } from 'react';
import cls from './ProductsByCategoryAndBrandLimit.module.scss';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { useSelector } from 'react-redux';

import {
  Select,
  SelectOptions,
  SelectWidth,
  WrapperWidth,
} from '@/shared/ui/Select/Select/Select';
import { useDebounce } from '@/shared/lib/hooks/useDebounce';
import { useParams } from 'react-router-dom';
import { ProductsByCategoryAndBrandActions } from '../../model/slices/ProductsByCategoryAndBrandSlice';
import { selectProductsByCategoryAndBrandLimit } from '../../model/selectors/selectProductsByCategoryAndBrand';
import { useProductsByCategoryAndBrand } from '../../api/productsApi';
import { TSortLimit } from '../../model/types/IProductsSchema';

interface ProductsByCategoryAndBrandLimitProps {
  className?: string;
}

export const ProductsByCategoryAndBrandLimit = memo(
  (props: ProductsByCategoryAndBrandLimitProps) => {
    const { className } = props;

    const dispatch = useAppDispatch();
    const limit = useSelector(selectProductsByCategoryAndBrandLimit);
    const { brandId, categoryId } = useParams();
    const [fetchProductsByCategoryAndBrand] = useProductsByCategoryAndBrand();

    const selectOptions = useMemo<SelectOptions<TSortLimit>[]>(
      () => [
        { value: `5`, content: '5' },
        { value: `10`, content: '10' },
        { value: `20`, content: '20' },
      ],
      [],
    );

    const fetchProductsList = useCallback(() => {
      fetchProductsByCategoryAndBrand({
        categoryId: Number(categoryId),
        brandId: Number(brandId),
      });
    }, [brandId, categoryId, fetchProductsByCategoryAndBrand]);

    const debounceLimitOrder = useDebounce(fetchProductsList, 500);

    const onChange = (value: TSortLimit) => {
      dispatch(ProductsByCategoryAndBrandActions.setLimit(Number(value)));
      dispatch(ProductsByCategoryAndBrandActions.setPage(1));
      debounceLimitOrder();
    };

    return (
      <div
        className={classNames(cls.ProductsByCategoryAndBrandLimit, {}, [
          className,
        ])}
      >
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
