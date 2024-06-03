import { classNames } from '@/shared/lib/classNames/classNames';
import { memo } from 'react';
import { Text } from '@/shared/ui/Text';
import cls from './CategoriesPopular.module.scss';
import { TextSize, TextTheme } from '@/shared/ui/Text/Text';
import { Carousel } from '@/shared/ui/Carousel/Carousel';
import { Card } from '@/shared/ui/Card';
import { CardTheme } from '@/shared/ui/Card/Card';
import { getRouteImage } from '@/shared/consts/router/publicRouter';
import { KitImage } from '@/shared/ui/KitImage/KitImage';
import { ICategory } from '../../model/types/ICategory';
import { useCategories } from '../../api/categoryApi';

interface CategoriesPopularProps {
  className?: string;
}

export const CategoriesPopular = memo((props: CategoriesPopularProps) => {
  const { className } = props;

  const { isSuccess, data: categories } = useCategories({});

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
