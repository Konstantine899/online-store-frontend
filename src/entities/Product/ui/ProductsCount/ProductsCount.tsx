import { classNames } from '@/shared/lib/classNames/classNames';
import { memo, useEffect } from 'react';
import cls from './ProductsCount.module.scss';
import { Text } from '@/shared/ui/Text';
import { TextSize, TextTheme } from '@/shared/ui/Text/Text';
import { useProductsContext } from '../../lib/contexts/ProductsContext';
import { Skeleton } from '@/shared/ui/Skeleton';
import { useSearchParams } from 'react-router-dom';

interface ProductsCountProps {
  className?: string;
}

export const ProductsCount = memo((props: ProductsCountProps) => {
  const { className } = props;
  const { products, isSuccess, isLoading } = useProductsContext();

  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get('search') || '';

  useEffect(() => {
    setSearchParams(search);
  }, [search, setSearchParams]);

  if (isLoading) {
    return (
      <div className={classNames(cls.ProductsCount, {}, [className])}>
        <Skeleton width={173} height={40} borderRadius={'10px'} />
        <Skeleton width={58} height={40} borderRadius={'10px'} />
      </div>
    );
  }

  if (isSuccess && products!.rows.length > 0) {
    return (
      <div className={classNames(cls.ProductsCount, {}, [className])}>
        <Text
          title={search && `Результат поиска`}
          text={
            search &&
            `По запросу "${search}" найдено ${products!.count} товаров`
          }
          theme={TextTheme.BLACK}
          size={TextSize.M}
        />
      </div>
    );
  }
});

ProductsCount.displayName = `ProductsCount`;
