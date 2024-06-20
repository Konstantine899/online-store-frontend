import { classNames } from '@/shared/lib/classNames/classNames';
import { memo, useEffect } from 'react';
import cls from './PageHeading.module.scss';
import { useCategory } from '@/entities/Category';
import { useParams } from 'react-router';
import { Text } from '@/shared/ui/Text';
import { TextSize, TextTheme } from '@/shared/ui/Text/Text';
import { PageHeadingSkeleton } from '@/entities/deprecated/PageHeading/ui/PageHeadingSkeleton/PageHeadingSkeleton';

/**
 * @deprecated
 */
interface PageHeadingProps {
  className?: string;
  count: number;
}

/**
 * @deprecated
 */
export const PageHeading = memo((props: PageHeadingProps) => {
  const { className, count } = props;
  const { categoryId } = useParams();
  const [fetchCategory, { data, isSuccess, isLoading }] = useCategory();

  useEffect(() => {
    fetchCategory(`${categoryId}`);
  }, [categoryId, fetchCategory]);

  if (isLoading) {
    return <PageHeadingSkeleton />;
  }

  if (data && isSuccess) {
    return (
      <div className={classNames(cls.PageHeading, {}, [className])}>
        {!data?.id ? (
          <Text
            text={`Все товары`}
            theme={TextTheme.INVERTED}
            size={TextSize.XL}
          />
        ) : (
          <Text
            text={`${data?.name}`}
            theme={TextTheme.INVERTED}
            size={TextSize.XL}
          />
        )}
        <Text
          text={`(${count})`}
          theme={TextTheme.INVERTED}
          size={TextSize.XL}
        />
      </div>
    );
  }
});

PageHeading.displayName = `PageHeading`;
