import { classNames } from '@/shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './ProductSummaryCard.module.scss';
import { Card, CardTheme } from '@/shared/ui/Card/Card';
import { Button, ButtonSize, ButtonTheme } from '@/shared/ui/Button';
import { getBrandNameSelector } from '@/entities/Brand';
import { getCategoryNameSelector } from '@/entities/Category';
import { getRating, getVotes } from '@/entities/Rating';
import { IProductDetails } from '@/entities/Product';
import { useSelector } from 'react-redux';

interface ProductSummaryCardProps {
  className?: string;
  productDetails: IProductDetails;
}

export const ProductSummaryCard = memo((props: ProductSummaryCardProps) => {
  const { className, productDetails } = props;

  const rating = useSelector(getRating);
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
        <div className={cls.rating}>
          <p>{`${rating}`}</p>
          <p>{`голоса: ${votes}`}</p>
        </div>
      </div>
    </Card>
  );
});
