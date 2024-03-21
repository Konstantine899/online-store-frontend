import { classNames } from '@/shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './ProductSummaryCard.module.scss';
import { Card, CardTheme } from '@/shared/ui/Card/Card';
import { Button, ButtonSize, ButtonTheme } from '@/shared/ui/Button';
import { getVotes } from '@/entities/Rating';
import { IProductDetails } from '../../model/types/IProductDetails';
import { useSelector } from 'react-redux';
import { Thumb, ThumbSize } from '@/shared/ui/Thumb/Thumb';
import { ProductRating } from '../ProductRating/ProductRating';

interface ProductSummaryCardProps {
  className?: string;
  productDetails: IProductDetails;
}

export const ProductSummaryCard = memo((props: ProductSummaryCardProps) => {
  const { className, productDetails } = props;

  const votes = useSelector(getVotes);

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
          <ProductRating />
          <div className={cls.votesWrapper}>
            <Thumb size={ThumbSize.M} className={cls.Thumb} />
            <p className={cls.votes}>{votes}</p>
          </div>
        </div>
      </div>
    </Card>
  );
});
