import { classNames } from '@/shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './ProductRating.module.scss';
import { Star, StarSize } from '@/shared/ui/Star/Star';
import { useProductContext } from '../../lib/contexts/ProductContext';

interface ProductRatingProps {
  className?: string;
}

export const ProductRating = memo((props: ProductRatingProps) => {
  const { className } = props;

  const { product, isSuccess } = useProductContext();

  const inverted = product?.rating == 0;

  if (isSuccess && product) {
    return (
      <div
        className={
          product.rating == 0
            ? cls.ProductRatingWrapperInverted
            : cls.ProductRatingWrapper
        }
      >
        <p className={cls.rating}>{product.rating}</p>
        <Star
          size={StarSize.S}
          className={classNames(cls.Star, { [cls.inverted]: inverted }, [
            className,
          ])}
        />
      </div>
    );
  }
});

ProductRating.displayName = `ProductRating`;
