import { classNames } from '@/shared/lib/classNames/classNames';
import { memo, useEffect } from 'react';
import cls from './ProductSummaryCard.module.scss';
import { Card, CardTheme } from '@/shared/ui/Card/Card';
import { Button, ButtonSize, ButtonTheme } from '@/shared/ui/Button';
import { ProductVotes } from '../ProductVotes/ProductVotes';
import { useProductContext } from '../../lib/contexts/ProductContext';
import { useParams } from 'react-router';
import { useRating } from '@/entities/Rating';
import { Text, TextTheme } from '@/shared/ui/Text/Text';
import { Star, StarSize } from '@/shared/ui/Star/Star';

interface ProductSummaryCardProps {
  className?: string;
}

export const ProductSummaryCard = memo((props: ProductSummaryCardProps) => {
  const { className } = props;
  const { productId } = useParams<{ productId: string }>();

  const [fetchRating, { data }] = useRating();
  const { product, isSuccess } = useProductContext();

  useEffect(() => {
    fetchRating({ productId: Number(productId) });
  }, [fetchRating, productId]);

  if (isSuccess && product) {
    const isZero = data?.rating == 0;

    const textTheme = isZero ? TextTheme.GRAY : TextTheme.YELLOW;

    return (
      <Card
        className={classNames(cls.ProductSummaryCard, {}, [className])}
        theme={CardTheme.OUTLINED}
      >
        <div className={cls.upp}>
          <p className={cls.price}>{`Цена:${product.price}`}</p>
        </div>
        <div className={cls.down}>
          <Button theme={ButtonTheme.FILLED} size={ButtonSize.M} fullWidth>
            В корзину
          </Button>
          <div className={cls.bottom}>
            <div className={cls.RatingWrapper}>
              <Text theme={textTheme} text={`${data?.rating}`} />
              <Star size={StarSize.S} isZero={isZero} />
            </div>
            <ProductVotes />
          </div>
        </div>
      </Card>
    );
  }
});

ProductSummaryCard.displayName = `ProductSummaryCard`;
