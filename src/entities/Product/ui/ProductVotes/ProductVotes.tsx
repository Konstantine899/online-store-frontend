import { classNames } from '@/shared/lib/classNames/classNames';
import { memo, useEffect } from 'react';
import cls from './ProductVotes.module.scss';
import { Thumb, ThumbSize } from '@/shared/ui/Thumb/Thumb';
import { useRating, transformVotes } from '@/entities/Rating';
import { useParams } from 'react-router';

interface ProductVotesProps {
  className?: string;
}

export const ProductVotes = memo((props: ProductVotesProps) => {
  const { className } = props;
  const { productId } = useParams<{ productId: string }>();
  const [fetchRating, { data, isSuccess }] = useRating();

  useEffect(() => {
    fetchRating({ productId: Number(productId) });
  }, [fetchRating, productId]);

  if (isSuccess && data) {
    return (
      <div className={classNames(cls.ProductVotesWrapper, {}, [className])}>
        <Thumb size={ThumbSize.M} className={cls.Thumb} />
        <p className={cls.votes}>{transformVotes(`${data.votes}`)}</p>
      </div>
    );
  }
});

ProductVotes.displayName = `ProductVotes`;
