import { classNames } from '@/shared/lib/classNames/classNames';
import { memo, MutableRefObject } from 'react';
import cls from './Paginate.module.scss';
import { Button, ButtonSize, ButtonTheme } from '@/shared/ui/Button';
import {
  fetchProducts,
  fetchProductsByBrand,
  fetchProductsByCategoryAndBrand,
  fetchProductsByCategory,
  ProductsActions,
  selectCurrentPage,
  selectLastPage,
  selectNextPage,
  selectPreviosPage,
} from '@/entities/Product';
import { usePaginate } from '@/shared/lib/hooks/usePaginate';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { useSelector } from 'react-redux';

import { selectCategoryId } from '@/entities/Category';
import { selectBrandId } from '@/entities/Brand';

interface PaginateProps {
  className?: string;
  topRef: MutableRefObject<HTMLDivElement | null>;
}

export const Paginate = memo((props: PaginateProps) => {
  const { className, topRef } = props;

  const dispatch = useAppDispatch();

  const currentPage = useSelector(selectCurrentPage); // текущая страница
  const lastPage = useSelector(selectLastPage); // последняя страница
  const previosPage = useSelector(selectPreviosPage); // предыдущая страница
  const nextPage = useSelector(selectNextPage); // следующая страница
  const brandId = useSelector(selectBrandId);
  const categoryId = useSelector(selectCategoryId);

  const onPageChange = (pageNumber: number) => () => {
    if (brandId && categoryId == 0) {
      topRef.current?.scrollIntoView({ behavior: 'smooth' });
      dispatch(ProductsActions.setPage(pageNumber));
      dispatch(fetchProductsByBrand({ brandId }));
    }
    if (categoryId && brandId == 0) {
      topRef.current?.scrollIntoView({ behavior: 'smooth' });
      dispatch(ProductsActions.setPage(pageNumber));
      dispatch(fetchProductsByCategory({ categoryId }));
    }
    if (brandId && categoryId) {
      topRef.current?.scrollIntoView({ behavior: 'smooth' });
      dispatch(ProductsActions.setPage(pageNumber));
      dispatch(fetchProductsByCategoryAndBrand({ brandId, categoryId }));
    }
    if (categoryId == 0 && brandId == 0) {
      topRef.current?.scrollIntoView({ behavior: 'smooth' });
      dispatch(ProductsActions.setPage(pageNumber));
      dispatch(fetchProducts());
    }
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
              className={classNames(``, {}, [cls.lastPageBtn])}
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
