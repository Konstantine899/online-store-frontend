import { classNames } from '@/shared/lib/classNames/classNames';
import { memo, useEffect } from 'react';
import cls from './ProductsByCategoryCount.module.scss';
import { useCategory } from '@/entities/Category';
import { useParams } from 'react-router';
import { Text } from '@/shared/ui/Text';
import { TextSize, TextTheme } from '@/shared/ui/Text/Text';

interface ProductsByCategoryCountProps {
  className?: string;
  count: number;
}

export const ProductsByCategoryCount = memo(
  (props: ProductsByCategoryCountProps) => {
    const { className, count } = props;
    const { categoryId } = useParams();
    const [fetchCategory, { data: category }] = useCategory();

    useEffect(() => {
      fetchCategory(`${categoryId}`);
    }, [categoryId, fetchCategory]);

    return (
      <div className={classNames(cls.ProductsByCategoryCount, {}, [className])}>
        <Text
          text={`${category?.name}`}
          theme={TextTheme.INVERTED}
          size={TextSize.XL}
        />
        <Text
          text={`(${count})`}
          theme={TextTheme.INVERTED}
          size={TextSize.XL}
        />
      </div>
    );
  },
);
