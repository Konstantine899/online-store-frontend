import { classNames } from '@/shared/lib/classNames/classNames';
import { memo } from 'react';
import { Text } from '@/shared/ui/Text';
import cls from './CategoriesPopular.module.scss';
import { TextSize, TextTheme } from '@/shared/ui/Text/Text';
import { Carousel } from '@/shared/ui/Carousel/Carousel';
import { Card } from '@/shared/ui/Card';
import { CardTheme } from '@/shared/ui/Card/Card';
import {
  getRouteImage,
  getRouteProductsByCategory,
} from '@/shared/consts/router/publicRouter';
import { KitImage } from '@/shared/ui/KitImage/KitImage';
import { ICategory } from '../../model/types/ICategory';
import { useCategories } from '../../api/categoryApi';
import { useFetchProductsByCategoryCarousel } from '@/entities/Product';
import { useNavigate } from 'react-router-dom';

interface CategoriesPopularProps {
  className?: string;
}

export const CategoriesPopular = memo((props: CategoriesPopularProps) => {
  const { className } = props;
  const navigate = useNavigate();
  const { isSuccess, data: categories } = useCategories();
  const [fetchProductsByCategoryCarousel] =
    useFetchProductsByCategoryCarousel();

  const getCategory = (categoryId: number) => () => {
    navigate(getRouteProductsByCategory(`${categoryId}`));
    fetchProductsByCategoryCarousel({ categoryId });
  };

  if (isSuccess) {
    return (
      <div className={classNames(cls.CategoriesPopular, {}, [className])}>
        <Text
          title={'Популярные категории'}
          theme={TextTheme.INVERTED}
          size={TextSize.XL}
        />
        <Carousel elementsQuantity={4} infinite={true}>
          {categories.map((category: ICategory) => (
            <Card
              key={category.id}
              theme={CardTheme.OUTLINED}
              className={cls.CategoryCard}
              onClick={getCategory(category.id)}
            >
              <KitImage
                src={getRouteImage(category.image)}
                height={77}
                width={120}
                className={cls.image}
              />
              <div>
                <p>{category.name}</p>
              </div>
            </Card>
          ))}
        </Carousel>
      </div>
    );
  }
});

CategoriesPopular.displayName = `CategoriesPopular`;
