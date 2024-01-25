import { classNames } from '@/shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './ProductListItemSkeleton.module.scss';
import { Card } from '@/shared/ui/Card';
import { CardTheme } from '@/shared/ui/Card/Card';
import { Skeleton } from '@/shared/ui/Skeleton';

interface ProductListItemSkeletonProps {
  className?: string;
}

export const ProductListItemSkeleton = memo(
  (props: ProductListItemSkeletonProps) => {
    const { className } = props;

    return (
      <div className={classNames(cls.ProductListItemSkeleton, {}, [className])}>
        <Card theme={CardTheme.OUTLINED} className={cls.cardWrapper}>
          <div className={cls.cardTop}>
            <Skeleton height={'220px'} width={'100%'} />
          </div>
          <div className={cls.cardBottom}>
            <Skeleton height={'32px'} width={'100%'} />
            <Skeleton height={'32px'} width={'100%'} />
            <Skeleton height={'60px'} width={'100%'} />
          </div>
        </Card>
      </div>
    );
  },
);
