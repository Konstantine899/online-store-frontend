import { useMemo } from 'react';

export const DOTS: string = '...';

const range = (start: number, end: number) => {
  /* Функция рассчитывающая диапазон */
  const length: number = end - start + 1; //левый диапазон 9 - 1 + 1; правый диапазон 16 - 8 + 1;
  return Array.from({ length }, (_, index: number) => index + start);
};

interface UsePaginateProps {
  lastPage: number;
  currentPage: number;
  siblingCount?: number;
}

export const usePaginate = ({
  lastPage,
  currentPage,
  siblingCount = 3,
}: UsePaginateProps) => {
  return useMemo(() => {
    /*  siblingCount - количество кнопок которые находятся слева и справа от текущей страницы
     * currentPage - текущая страница
     * lastPage - последняя страница
     * Количество страниц рассчитывается как
     * siblingCount + firstPage + lastPage + currentPage * 2 DOTS*/
    const totalPageNumbers = siblingCount + 5;
    /* Если totalPageNumbers(общее количество страниц) меньше либо равно lastPage(последней страницы)
     * то, мы возвращаем диапазон от 1 до последней страницы т.е. без DOTS */
    if (totalPageNumbers >= lastPage) {
      return range(1, lastPage);
    }

    /* Расчет левых и правых индексов
     * leftIndex - рассчитываю крайний левый index, с которого начнется отображение кнопок,
     * и убеждаюсь что он находится в диапазоне от 1-го элемента массива, до текущей страницы.
     * rightIndex - рассчитываю крайний правый index, на котором закончится отображение кнопок,
     * и убеждаюсь что он находится в диапазоне от текущей страницы до последней страницы */
    const leftIndex = Math.max(currentPage - siblingCount, 1); // 4 - 3 = 1 return 1, 5-3=2 return 2
    const rightIndex = Math.min(currentPage + siblingCount, lastPage); // lastPage 10. 8 + 3 = 11 return 10

    /* Условие для показа точек */
    const shouldLeftDots = leftIndex > 2; // если после расчета leftIndex < 2 return false. Или leftIndex > 2 return true
    const shouldRightDots = rightIndex < lastPage - 2; // -2 что ды не вйти за рамки массива

    const firstPageIndex = 1; // нумерация массива начинается с 1 индекса
    const lastPageIndex = lastPage;

    /* Левые точки не показываются, правые показываются */
    if (!shouldLeftDots && shouldRightDots) {
      const leftItemCount = 3 + 2 * siblingCount; // 3 + 2  * 3 = 9 кнопок до DOTS
      const leftRange = range(1, leftItemCount); // возвращаю массив с 1-9 страницы
      return [...leftRange, DOTS, lastPage]; // С 1-й страницы по 9 ... и последняя страница
    }

    /* Левые точки показываются, правые не показываются */
    if (shouldLeftDots && !shouldRightDots) {
      const rightItemCount = 3 + 2 * siblingCount; // 3 + 2  * 3 = 9 кнопок до DOTS
      const rightRange = range(lastPageIndex - rightItemCount + 1, lastPage); // возвращает массив от currentPage до lastPage
      return [firstPageIndex, DOTS, ...rightRange]; // 1 страница ... с 8 по 16 страницу
    }

    /* Левые точки показываются, правые точки показываются */
    if (shouldLeftDots && shouldRightDots) {
      const middleRange = range(leftIndex, rightIndex);
      return [firstPageIndex, DOTS, ...middleRange, DOTS, lastPageIndex];
    }
  }, [currentPage, lastPage, siblingCount]);
};
