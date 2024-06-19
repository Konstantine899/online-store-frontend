import { classNames } from '@/shared/lib/classNames/classNames';
import { memo, useCallback } from 'react';
import cls from './Paginate.module.scss';
import { Button, ButtonSize, ButtonTheme } from '@/shared/ui/Button';

interface PaginateProps {
  className?: string;
  onPageChange: (pageNumber: number) => void;
  paginationRange: (string | number)[];
  currentPage: number;
  lastPage: number;
}

export const Paginate = memo((props: PaginateProps) => {
  const { className, onPageChange, currentPage, lastPage, paginationRange } =
    props;

  const onClick = useCallback(
    (pageNumber: number) => () => {
      if (pageNumber !== pageNumber) return; // проверка на NaN если число не равно само себе, то NaN
      onPageChange(pageNumber);
    },
    [onPageChange],
  );

  if (currentPage == 0 || paginationRange.length < 2) {
    return null;
  }

  return (
    <div className={classNames(cls.Paginate, {}, [className])}>
      {paginationRange.map((item, index) => {
        if (item === 1) {
          return (
            <Button
              key={index}
              className={classNames(cls.Btn, {}, [cls.firstPageBtn])}
              theme={ButtonTheme.ROUND}
              size={ButtonSize.M}
              onClick={onClick(Number(item))}
            >
              {item}
            </Button>
          );
        }

        if (item === currentPage) {
          return (
            <Button
              key={index}
              className={classNames(cls.Btn, {}, [cls.currentPageBtn])}
              theme={ButtonTheme.ROUND}
              size={ButtonSize.M}
              onClick={onClick(Number(item))}
            >
              {item}
            </Button>
          );
        }

        if (item === lastPage) {
          return (
            <Button
              key={index}
              className={classNames(``, {}, [cls.lastPageBtn])}
              theme={ButtonTheme.ROUND}
              size={ButtonSize.M}
              onClick={onClick(Number(item))}
            >
              {item}
            </Button>
          );
        }

        return (
          <Button
            key={index}
            className={classNames(cls.Btn, {}, [])}
            theme={ButtonTheme.ROUND}
            size={ButtonSize.M}
            onClick={onClick(Number(item))}
          >
            {item}
          </Button>
        );
      })}
    </div>
  );
});

Paginate.displayName = `Paginate`;
