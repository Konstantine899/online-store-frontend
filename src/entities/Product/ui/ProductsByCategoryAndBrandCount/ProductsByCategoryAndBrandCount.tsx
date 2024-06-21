import { classNames } from '@/shared/lib/classNames/classNames';
import { memo, useEffect } from 'react';
import cls from './ProductsByCategoryAndBrandCount.module.scss';
import { useParams } from 'react-router';
import { useCategory } from '@/entities/Category';
import { Text, TextSize, TextTheme } from '@/shared/ui/Text/Text';
import { useProductsByCategoryAndBrandContext } from '../../lib/contexts/ProductsByCategoryAndBrandContext';

interface ProductsByCategoryAndBrandCountProps {
  className?: string;
}

export const ProductsByCategoryAndBrandCount = memo(
  (props: ProductsByCategoryAndBrandCountProps) => {
    const { className } = props;
    const { categoryId } = useParams();
    const [fetchCategory, { data: category }] = useCategory();
    const { productsByCategoryAndBrand } =
      useProductsByCategoryAndBrandContext();

    useEffect(() => {
      fetchCategory(`${categoryId}`);
    }, [categoryId, fetchCategory]);

    return (
      <div
        className={classNames(cls.ProductsByCategoryAndBrandCount, {}, [
          className,
        ])}
      >
        <Text
          text={`${category?.name}`}
          theme={TextTheme.INVERTED}
          size={TextSize.XL}
        />
        <Text
          text={`(${productsByCategoryAndBrand?.count})`}
          theme={TextTheme.INVERTED}
          size={TextSize.XL}
        />
      </div>
    );
  },
);
