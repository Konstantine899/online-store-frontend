import { classNames } from '@/shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './ProductsNotFound.module.scss';
import { ProductsPopular } from '@/entities/Product/ui/ProductsPopular/ProductsPopular';

interface ProductsNotFoundProps {
  className?: string;
}

export const ProductsNotFound = memo((props: ProductsNotFoundProps) => {
  const { className } = props;

  return (
    <div className={classNames(cls.ProductsNotFound, {}, [className])}>
      <ProductsPopular />
    </div>
  );
});

ProductsNotFound.displayName = `ProductsNotFound`;
