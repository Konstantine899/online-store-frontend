import { classNames } from '@/shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './ProductRating.module.scss';
import { Star, StarSize } from '@/shared/ui/Star/Star';
import { getRating } from '@/entities/Rating';
import { useSelector } from 'react-redux';

interface ProductRatingProps {
  className?: string;
}

export const ProductRating = memo((props: ProductRatingProps) => {
  const { className } = props;
  const rating = useSelector(getRating);
  const inverted = rating == 0;
  return (
    <div
      className={
        rating == 0
          ? cls.ProductRatingWrapperInverted
          : cls.ProductRatingWrapper
      }
    >
      <p className={cls.rating}>{rating}</p>
      <Star
        size={StarSize.S}
        className={classNames(cls.Star, { [cls.inverted]: inverted }, [
          cls[className],
        ])}
      />
    </div>
  );
});
