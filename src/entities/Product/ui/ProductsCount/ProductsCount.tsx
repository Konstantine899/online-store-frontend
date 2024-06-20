import { classNames } from '@/shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './ProductsCount.module.scss';
import { Text } from '@/shared/ui/Text';
import { TextSize, TextTheme } from '@/shared/ui/Text/Text';

interface ProductsCountProps {
  className?: string;
  count: number;
}

export const ProductsCount = memo((props: ProductsCountProps) => {
  const { className, count } = props;

  return (
    <div className={classNames(cls.ProductsCount, {}, [className])}>
      <Text text={`Все товары`} theme={TextTheme.INVERTED} size={TextSize.XL} />
      <Text text={`(${count})`} theme={TextTheme.INVERTED} size={TextSize.XL} />
    </div>
  );
});
