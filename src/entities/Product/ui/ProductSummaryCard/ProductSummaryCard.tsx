import { classNames } from '@/shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './ProductSummaryCard.module.scss';
import { Card, CardTheme } from '@/shared/ui/Card/Card';
import { Button, ButtonSize, ButtonTheme } from '@/shared/ui/Button';
import { getRating, getVotes } from '@/entities/Rating';
import { IProductDetails } from '../../model/types/IProductDetails';
import { useSelector } from 'react-redux';
import { Star, StarSize } from '@/shared/ui/Star/Star';
import { Thumb, ThumbSize } from '@/shared/ui/Thumb/Thumb';

interface ProductSummaryCardProps {
  className?: string;
  productDetails: IProductDetails;
}

export const ProductSummaryCard = memo((props: ProductSummaryCardProps) => {
  const { className, productDetails } = props;

  const rating = useSelector(getRating);
  const votes = useSelector(getVotes);
  const inverted = rating == 0;

  return (
    <Card
      className={classNames(cls.ProductSummaryCard, {}, [className])}
      theme={CardTheme.OUTLINED}
    >
      <div className={cls.upp}>
        <p className={cls.price}>{`Цена:${productDetails?.price}`}</p>
      </div>
      <div className={cls.down}>
        <Button theme={ButtonTheme.FILLED} size={ButtonSize.M} fullWidth>
          В корзину
        </Button>
        <div className={cls.bottom}>
          <div className={rating == 0 ? cls.invertedRating : cls.ratingWrapper}>
            <p className={cls.rating}>{rating}</p>
            <Star
              size={StarSize.S}
              className={classNames(cls.Star, { [cls.inverted]: inverted }, [])}
            />
          </div>
          <div className={cls.votesWrapper}>
            <Thumb size={ThumbSize.M} className={cls.Thumb} />
            <p className={cls.votes}>{votes}</p>
          </div>
        </div>
      </div>
    </Card>
  );
});
