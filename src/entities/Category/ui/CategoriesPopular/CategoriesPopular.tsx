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
import { Skeleton } from '@/shared/ui/Skeleton';

interface CategoriesPopularProps {
  className?: string;
}

export const CategoriesPopular = memo((props: CategoriesPopularProps) => {
  const { className } = props;
  const navigate = useNavigate();
  const { isSuccess, isLoading, data: categories } = useCategories();
  const [fetchProductsByCategoryCarousel] =
    useFetchProductsByCategoryCarousel();

  const elementsQuantity: number = 4;

  const getCategory = (categoryId: number) => () => {
    navigate(getRouteProductsByCategory(`${categoryId}`));
    fetchProductsByCategoryCarousel({ categoryId });
  };

  if (isLoading) {
    return (
      <div className={classNames(cls.CategoriesPopular, {}, [className])}>
        <Skeleton width={400} height={40} borderRadius={'10px'} />
        <Carousel elementsQuantity={elementsQuantity} infinite={true} isLoading>
          {Array(elementsQuantity)
            .fill(1)
            .map((_, index: number) => (
              <Skeleton
                width={251}
                height={158}
                borderRadius={'10px'}
                key={index}
                className={cls.CardSkeleton}
              />
            ))}
        </Carousel>
      </div>
    );
  }

  if (isSuccess && categories!.length > 0) {
    return (
      <div className={classNames(cls.CategoriesPopular, {}, [className])}>
        <Text
          title={'Популярные категории'}
          theme={TextTheme.BLACK}
          size={TextSize.XL}
        />
        <Carousel elementsQuantity={elementsQuantity} infinite={true}>
          {categories!.map((category: ICategory) => (
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
