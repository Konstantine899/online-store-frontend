import { classNames } from '@/shared/lib/classNames/classNames';
import { memo, useEffect } from 'react';
import cls from './ProductRating.module.scss';
import { Star, StarSize } from '@/shared/ui/Star/Star';
import { useRating } from '@/entities/Rating';
import { useParams } from 'react-router';

interface ProductRatingProps {
  className?: string;
}

export const ProductRating = memo((props: ProductRatingProps) => {
  const { className } = props;
  const { productId } = useParams<{ productId: string }>();

  const [fetchRating, { data, isSuccess }] = useRating();

  useEffect(() => {
    fetchRating({ productId: Number(productId) });
  }, [fetchRating, productId]);

  if (isSuccess && data) {
    const inverted = data.rating == 0;

    return (
      <div
        className={
          data.rating == 0
            ? cls.ProductRatingWrapperInverted
            : cls.ProductRatingWrapper
        }
      >
        <p className={cls.rating}>{data.rating}</p>
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
