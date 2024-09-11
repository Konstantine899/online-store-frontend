import { memo } from 'react';
import cls from './ProductHeading.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useProductContext } from '@/entities/Product';

interface ProductHeadingProps {
  className?: string;
}

export const ProductHeading = memo((props: ProductHeadingProps) => {
  const { className } = props;
  const { product, isSuccess } = useProductContext();

  if (isSuccess && product) {
    return (
      <div className={classNames(cls.ProductHeading, {}, [className])}>
        <h1>{product.name}</h1>
      </div>
    );
  }
});

ProductHeading.displayName = `ProductHeading`;
