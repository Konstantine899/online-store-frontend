import { memo } from 'react';
import cls from './CategoriesListSkeleton.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Skeleton } from '@/shared/ui/Skeleton';

interface CategoriesListSkeletonProps {
  className?: string;
}

export const CategoriesListSkeleton = memo(
  (props: CategoriesListSkeletonProps) => {
    const { className } = props;
    return (
      <li className={classNames(cls.CategoriesListSkeleton, {}, [className])}>
        <Skeleton height={30} width={'10%'} borderRadius={'10px'} />
        <Skeleton height={30} width={'80%'} borderRadius={'10px'} />
      </li>
    );
  },
);

CategoriesListSkeleton.displayName = `CategoriesListSkeleton`;
