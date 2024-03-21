import { classNames } from '@/shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './ProductVotes.module.scss';
import { Thumb, ThumbSize } from '@/shared/ui/Thumb/Thumb';
import { getVotes } from '@/entities/Rating';
import { useSelector } from 'react-redux';

interface ProductVotesProps {
  className?: string;
}

export const ProductVotes = memo((props: ProductVotesProps) => {
  const { className } = props;
  const votes = useSelector(getVotes);

  return (
    <div className={classNames(cls.ProductVotesWrapper, {}, [className])}>
      <Thumb size={ThumbSize.M} className={cls.Thumb} />
      <p className={cls.votes}>{votes}</p>
    </div>
  );
});
