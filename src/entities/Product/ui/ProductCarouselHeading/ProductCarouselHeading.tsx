import { classNames } from '@/shared/lib/classNames/classNames';
import { memo, MutableRefObject, useRef } from 'react';
import cls from './ProductCarouselHeading.module.scss';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import {
  CategoryActions,
  getCategoryIdSelector,
  ICategory,
} from '@/entities/Category';
import { useSelector } from 'react-redux';
import { TabItem, Tabs } from '@/shared/ui/Tabs/Tabs';
import { fetchProductsCarousel } from '../../model/services/fetchProductsCarousel';
import { fetchProductsByCategoryCarousel } from '../../model/services/fetchProductsByCategoryCarousel';

interface ProductCarouselHeadingProps {
  className?: string;
  categories?: ICategory[];
}

export const ProductCarouselHeading = memo(
  (props: ProductCarouselHeadingProps) => {
    const { className, categories } = props;

    const topRef: MutableRefObject<HTMLDivElement | null> = useRef(null);

    const dispatch = useAppDispatch();
    const categoryId = useSelector(getCategoryIdSelector);

    const tempArray: Omit<ICategory, 'image'>[] = [...categories];
    tempArray.unshift({ id: 0, name: 'Все' });

    const handleClick = (tab: TabItem) => {
      topRef.current?.scrollIntoView({ behavior: 'smooth' });
      if (tab.id === 0) {
        dispatch(CategoryActions.setCategoryId(tab.id));
        return dispatch(fetchProductsCarousel());
      }
      dispatch(fetchProductsByCategoryCarousel({ categoryId: tab.id }));
    };

    return (
      <div
        className={classNames(cls.ProductCarouselHeading, {}, [className])}
        ref={topRef}
      >
        <h1 className={cls.Title}>Популярные товары</h1>
        <Tabs tabs={tempArray} id={categoryId} onTabClick={handleClick} />
      </div>
    );
  },
);
