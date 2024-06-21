import { classNames } from '@/shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './ProductsCount.module.scss';
import { Text } from '@/shared/ui/Text';
import { TextSize, TextTheme } from '@/shared/ui/Text/Text';
import { useProductsContext } from '../../lib/contexts/ProductsContext';

interface ProductsCountProps {
  className?: string;
}

export const ProductsCount = memo((props: ProductsCountProps) => {
  const { className } = props;
  const { products } = useProductsContext();

  return (
    <div className={classNames(cls.ProductsCount, {}, [className])}>
      <Text text={`Все товары`} theme={TextTheme.INVERTED} size={TextSize.XL} />
      <Text
        text={`(${products?.count})`}
        theme={TextTheme.INVERTED}
        size={TextSize.XL}
      />
    </div>
  );
});

ProductsCount.displayName = `ProductsCount`;
