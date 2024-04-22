import { classNames } from '@/shared/lib/classNames/classNames';
import { memo, useEffect } from 'react';
import cls from './CategoryCarousel.module.scss';
import { Carousel } from '@/shared/ui/Carousel/Carousel';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { getAllCategoriesSelector } from '../../model/selectors/getAllCategoriesSelector';
import { CategoryActions } from '../../model/slices/CategorySlice';
import { fetchCategoriesList } from '../../model/services/fetchCategoriesList';
import { useSelector } from 'react-redux';
import { Card } from '@/shared/ui/Card';
import { KitImage } from '@/shared/ui/KitImage/KitImage';
import {
  getRouteImage,
  getRouteListProductsByCategory,
} from '@/shared/consts/router/publicRouter';
import { CardTheme } from '@/shared/ui/Card/Card';
import {
  FetchProductsByCategory,
  ProductsPageActions,
} from '@/entities/Product';
import { BrandActions } from '@/entities/Brand';
import { useNavigate } from 'react-router';

interface CategoryCarouselProps {
  className?: string;
}

export const CategoryCarousel = memo((props: CategoryCarouselProps) => {
  const { className } = props;

  const dispatch = useAppDispatch();
  const categories = useSelector(getAllCategoriesSelector);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchCategoriesList());
  }, [dispatch]);

  const onHandleClick = (categoryId: number) => () => {
    navigate(getRouteListProductsByCategory(`${categoryId}`));
    dispatch(ProductsPageActions.setPage(1));
    dispatch(CategoryActions.setCategoryId(categoryId));
    dispatch(BrandActions.setBrandId(0));
    dispatch(FetchProductsByCategory({ categoryId }));
  };

  return (
    <div className={classNames(cls.CategoryCarousel, {}, [className])}>
      <Carousel elementsQuantity={4} infinite={true}>
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
