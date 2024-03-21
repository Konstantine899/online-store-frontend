import { classNames } from '@/shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './ProductSummaryCard.module.scss';
import { Card, CardTheme } from '@/shared/ui/Card/Card';
import { Button, ButtonSize, ButtonTheme } from '@/shared/ui/Button';
import { IProductDetails } from '../../model/types/IProductDetails';
import { ProductRating } from '../ProductRating/ProductRating';
import { ProductVotes } from '../ProductVotes/ProductVotes';

interface ProductSummaryCardProps {
  className?: string;
  productDetails: IProductDetails;
}

export const ProductSummaryCard = memo((props: ProductSummaryCardProps) => {
  const { className, productDetails } = props;

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
          <ProductVotes />
        </div>
      </div>
    </Card>
  );
});
