import { classNames } from '@/shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './ProductsCount.module.scss';
import { Text } from '@/shared/ui/Text';
import { TextSize, TextTheme } from '@/shared/ui/Text/Text';
import { useProductsContext } from '../../lib/contexts/ProductsContext';
import { Skeleton } from '@/shared/ui/Skeleton';

interface ProductsCountProps {
  className?: string;
}

export const ProductsCount = memo((props: ProductsCountProps) => {
  const { className } = props;
  const { products, isSuccess, isLoading } = useProductsContext();

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
          text={`Все товары`}
          theme={TextTheme.INVERTED}
          size={TextSize.XL}
        />
        <Text
          text={`(${products?.count})`}
          theme={TextTheme.INVERTED}
          size={TextSize.XL}
        />
      </div>
    );
  }
});

ProductsCount.displayName = `ProductsCount`;
