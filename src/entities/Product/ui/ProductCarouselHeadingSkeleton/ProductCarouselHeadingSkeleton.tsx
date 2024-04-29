import { classNames } from '@/shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './ProductCarouselHeadingSkeleton.module.scss';
import { Tabs } from '@/shared/ui/Tabs/Tabs';
import { Skeleton } from '@/shared/ui/Skeleton';

interface ProductCarouselHeadingSkeletonProps {
  className?: string;
}

export const ProductCarouselHeadingSkeleton = memo(
  (props: ProductCarouselHeadingSkeletonProps) => {
    const { className } = props;

    const tabsSkeletons = Array(10)
      .fill(0)
      .map((item) => (
        <Skeleton key={item.id} width={120} height={38} borderRadius={`10px`} />
      ));

    return (
      <div
        className={classNames(cls.ProductCarouselHeadingSkeleton, {}, [
          className,
        ])}
      >
        <Skeleton height={38} width={312} borderRadius={`10px`} />
        {tabsSkeletons}
      </div>
    );
  },
);
