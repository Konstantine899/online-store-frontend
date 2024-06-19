import { classNames } from '@/shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './ProductSummaryCard.module.scss';
import { Card, CardTheme } from '@/shared/ui/Card/Card';
import { Button, ButtonSize, ButtonTheme } from '@/shared/ui/Button';
import { ProductRating } from '../ProductRating/ProductRating';
import { ProductVotes } from '../ProductVotes/ProductVotes';
import { useSelector } from 'react-redux';
import { selectPrice } from '../../model/selectors/selectProductDetails';

interface ProductSummaryCardProps {
  className?: string;
}

export const ProductSummaryCard = memo((props: ProductSummaryCardProps) => {
  const { className } = props;
  const price = useSelector(selectPrice);

  return (
    <Card
      className={classNames(cls.ProductSummaryCard, {}, [className])}
      theme={CardTheme.OUTLINED}
    >
      <div className={cls.upp}>
        <p className={cls.price}>{`Цена:${price}`}</p>
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

ProductSummaryCard.displayName = `ProductSummaryCard`;
