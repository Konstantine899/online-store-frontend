import { classNames } from '@/shared/lib/classNames/classNames';
import { memo, useEffect } from 'react';
import cls from './PageHeading.module.scss';
import { useSelector } from 'react-redux';
import { selectCategoryId, useCategory } from '@/entities/Category';

interface PageHeadingProps {
  className?: string;
  count: number;
}

export const PageHeading = memo((props: PageHeadingProps) => {
  const { className, count } = props;
  const categoryId = useSelector(selectCategoryId);
  const [fetchCategory, { data }] = useCategory();

  useEffect(() => {
    fetchCategory(categoryId);
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
