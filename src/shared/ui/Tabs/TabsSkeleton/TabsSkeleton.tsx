import { classNames } from '@/shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './TabsSkeleton.module.scss';
import { Skeleton } from '../../Skeleton/Skeleton';

interface TabsSkeletonProps {
  className?: string;
}

export const TabsSkeleton = memo((props: TabsSkeletonProps) => {
  const { className } = props;

  const emptyTabs = Array(5).fill(0);
  return (
    <div className={classNames(cls.TabsSkeleton, {}, [className])}>
      {emptyTabs.map((_, index: number) => (
        <Skeleton
          key={index}
          width={85}
          height={34}
          borderRadius={'10px'}
          className={cls.TabSkeleton}
        />
      ))}
    </div>
  );
});
