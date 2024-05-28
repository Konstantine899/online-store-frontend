import { classNames } from '@/shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './ProductPopular.module.scss';
import { Text, TextSize, TextTheme } from '@/shared/ui/Text/Text';

interface ProductPopularProps {
  className?: string;
}

export const ProductPopular = memo((props: ProductPopularProps) => {
  const { className } = props;

  return (
    <div className={classNames(cls.ProductPopular, {}, [className])}>
      <Text
        title={'Популярные товары'}
        theme={TextTheme.INVERTED}
        size={TextSize.XL}
      />
    </div>
  );
});
