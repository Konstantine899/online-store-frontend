import { classNames } from '@/shared/lib/classNames/classNames';
import { memo, useEffect } from 'react';
import cls from './PageHeading.module.scss';
import { useCategory } from '@/entities/Category';
import { useParams } from 'react-router';

interface PageHeadingProps {
  className?: string;
  count: number;
}

export const PageHeading = memo((props: PageHeadingProps) => {
  const { className, count } = props;
  const { categoryId } = useParams();
  const [fetchCategory, { data }] = useCategory();

  useEffect(() => {
    fetchCategory(`${categoryId}`);
  }, [categoryId, fetchCategory]);

  if (count > 0) {
    return (
      <div className={classNames(cls.PageHeading, {}, [className])}>
        <h1>
          {!data?.id ? `Все товары` : `${data?.name}`}
          <span>{`(${count})`}</span>
        </h1>
      </div>
    );
  }
});

PageHeading.displayName = `PageHeading`;
