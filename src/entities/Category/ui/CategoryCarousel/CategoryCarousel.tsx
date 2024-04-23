import { classNames } from '@/shared/lib/classNames/classNames';
import { memo, useEffect } from 'react';
import cls from './CategoryCarousel.module.scss';
import { Carousel } from '@/shared/ui/Carousel/Carousel';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { getAllCategoriesSelector } from '../../model/selectors/getAllCategoriesSelector';
import { CategoryActions } from '../../model/slices/CategorySlice';
import { fetchAllCategories } from '../../model/services/fetchAllCategories';
import { useSelector } from 'react-redux';
import { Card } from '@/shared/ui/Card';
import { KitImage } from '@/shared/ui/KitImage/KitImage';
import {
  getRouteImage,
  getRouteListProductsByCategory,
} from '@/shared/consts/router/publicRouter';
import { CardTheme } from '@/shared/ui/Card/Card';
import { FetchProductsByCategory, ProductsActions } from '@/entities/Product';
import { BrandActions } from '@/entities/Brand';
import { useNavigate } from 'react-router';
import { ICategory } from '../../model/types/ICategory';

interface CategoryCarouselProps {
  className?: string;
  categories?: ICategory[];
}

export const CategoryCarousel = memo((props: CategoryCarouselProps) => {
  const { className, categories } = props;

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onHandleClick = (categoryId: number) => () => {
    navigate(getRouteListProductsByCategory(`${categoryId}`));
    dispatch(ProductsActions.setPage(1));
    dispatch(CategoryActions.setCategoryId(categoryId));
    dispatch(BrandActions.setBrandId(0));
    dispatch(FetchProductsByCategory({ categoryId }));
  };

  return (
    <div className={classNames(cls.CategoryCarousel, {}, [className])}>
      <Carousel elementsQuantity={3} infinite={true}>
        {categories.map((category) => (
          <Card
            theme={CardTheme.OUTLINED}
            key={category.id}
            className={cls.CategoryCard}
            onClick={onHandleClick(category.id)}
          >
            <div className={cls.CategoryCardImageWrapper}>
              <KitImage
                src={getRouteImage(category.image)}
                className={cls.CategoryCardImage}
              />
            </div>
            <div>
              <p>{category.name}</p>
            </div>
          </Card>
        ))}
      </Carousel>
    </div>
  );
});
