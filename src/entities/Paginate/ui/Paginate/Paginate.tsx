import { classNames } from '@/shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './Paginate.module.scss';
import { Button, ButtonSize, ButtonTheme } from '@/shared/ui/Button';
import { ProductsPageActions } from '@/entities/Product/model/slices/ProductsSlice';
import { FetchProducts } from '@/entities/Product/model/services/FetchProducts';
import { usePaginate } from '@/shared/lib/hooks/usePaginate';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { useSelector } from 'react-redux';

import {
  getCurrentPage,
  getLastPage,
  getNextPage,
  getPreviosPage,
} from '../../model/selectors/getPaginateState';

interface PaginateProps {
  className?: string;
}

export const Paginate = memo((props: PaginateProps) => {
  const { className } = props;

  const dispatch = useAppDispatch();

  const currentPage = useSelector(getCurrentPage); // текущая страница
  const lastPage = useSelector(getLastPage); // последняя страница
  const previosPage = useSelector(getPreviosPage); // предыдущая страница
  const nextPage = useSelector(getNextPage); // следующая страница

  const onPageChange = (pageNumber: number) => () => {
    if (isNaN(pageNumber)) return;
    dispatch(ProductsPageActions.setPage(pageNumber));
    dispatch(FetchProducts());
  };

  const paginationRange = usePaginate({
    currentPage,
    lastPage,
  });

  if (currentPage == 0 || paginationRange.length < 2) {
    return null;
  }

  return (
    <div className={classNames(cls.Paginate, {}, [className])}>
      {paginationRange.map((item, index) => {
        if (item === currentPage) {
          return (
            <Button
              key={index}
              className={classNames(cls.Btn, {}, [cls.currentPageBtn])}
              theme={ButtonTheme.ROUND}
              size={ButtonSize.M}
              onClick={onPageChange(Number(item))}
            >
              {item}
            </Button>
          );
        }
        if (item === lastPage) {
          return (
            <Button
              key={index}
              className={classNames(cls.Btn, {}, [cls.lastPageBtn])}
              theme={ButtonTheme.ROUND}
              size={ButtonSize.M}
              onClick={onPageChange(Number(item))}
            >
              {item}
            </Button>
          );
        }

        if (item === 1) {
          return (
            <Button
              key={index}
              className={classNames(cls.Btn, {}, [cls.firstPageBtn])}
              theme={ButtonTheme.ROUND}
              size={ButtonSize.M}
              onClick={onPageChange(Number(item))}
            >
              {item}
            </Button>
          );
        }

        if (item === previosPage) {
          return (
            <Button
              key={index}
              className={classNames(cls.Btn, {}, [cls.previosPageBtn])}
              theme={ButtonTheme.ROUND}
              size={ButtonSize.M}
              onClick={onPageChange(Number(item))}
            >
              {item}
            </Button>
          );
        }

        if (item === nextPage) {
          return (
            <Button
              key={index}
              className={classNames(cls.Btn, {}, [cls.nextPageBtn])}
              theme={ButtonTheme.ROUND}
              size={ButtonSize.M}
              onClick={onPageChange(Number(item))}
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
            onClick={onPageChange(Number(item))}
          >
            {item}
          </Button>
        );
      })}
    </div>
  );
});
