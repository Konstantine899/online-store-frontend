import { classNames } from '@/shared/lib/classNames/classNames';
import { memo, useCallback, useMemo } from 'react';
import cls from './ProductsLimit.module.scss';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import {
  Select,
  SelectOptions,
  SelectWidth,
  WrapperWidth,
} from '@/shared/ui/Select/Select/Select';
import { useDebounce } from '@/shared/lib/hooks/useDebounce';
import { selectProductsLimit } from '../../model/selectors/selectProducts';
import { ProductsActions } from '../../model/slices/ProductsSlice';
import { useProducts } from '../../api/productsApi';
import { TSortLimit } from '../../model/types/IProductsSchema';
import { useSearchParams } from 'react-router-dom';
import { LIMIT } from '@/shared/consts/urlParams';

interface ProductsLimitProps {
  className?: string;
}

export const ProductsLimit = memo((props: ProductsLimitProps) => {
  const { className } = props;
  const dispatch = useAppDispatch();
  const limit = useSelector(selectProductsLimit).toString() as TSortLimit;
  const [fetchProducts] = useProducts();
  const [searchParams, setSearchParams] = useSearchParams();
  const urlParamLimit = searchParams.get(LIMIT) as TSortLimit;

  const selectOptions = useMemo<SelectOptions<TSortLimit>[]>(
    () => [
      { value: `5`, content: '5' },
      { value: `10`, content: '10' },
      { value: `20`, content: '20' },
    ],
    [],
  );

  const addLimitToUrlParam = useCallback(
    (limit: number) => {
      if (limit > 5) {
        searchParams.set(LIMIT, `${limit}`);
        setSearchParams(searchParams);
      } else {
        searchParams.delete(LIMIT);
        setSearchParams(searchParams);
      }
    },
    [searchParams, setSearchParams],
  );

  const fetchProductsList = useCallback(() => {
    fetchProducts({ limit: Number(limit) });
  }, [fetchProducts, limit]);

  const debounceLimitOrder = useDebounce(fetchProductsList, 500);

  const onChange = useCallback(
    (value: TSortLimit) => {
      dispatch(ProductsActions.setLimit(Number(value)));
      dispatch(ProductsActions.setPage(1));
      addLimitToUrlParam(Number(value));
      debounceLimitOrder();
    },
    [addLimitToUrlParam, debounceLimitOrder, dispatch],
  );

  const isLimit = urlParamLimit ? urlParamLimit : limit;

  return (
    <div className={classNames(cls.SortingLimit, {}, [className])}>
      <Select
        options={selectOptions}
        active={isLimit}
        onChange={onChange}
        label={'Показывать по'}
        WrapperWidth={WrapperWidth.XL}
        SelectWidth={SelectWidth.M}
      />
    </div>
  );
});

ProductsLimit.displayName = `ProductsLimit`;
