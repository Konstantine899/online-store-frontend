import { classNames } from '@/shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './PageHeadingSkeleton.module.scss';
import { Skeleton } from '@/shared/ui/Skeleton';

/**
 * @deprecated
 */
interface PageHeadingSkeletonProps {
  className?: string;
}

/**
 * @deprecated
 */
export const PageHeadingSkeleton = memo((props: PageHeadingSkeletonProps) => {
  const { className } = props;

  return (
    <div className={classNames(cls.PageHeading, {}, [className])}>
      <Skeleton
        width={250}
        height={40}
        borderRadius={`10px`}
        className={cls.PageHeadingSkeleton}
      />
    </div>
  );
});
