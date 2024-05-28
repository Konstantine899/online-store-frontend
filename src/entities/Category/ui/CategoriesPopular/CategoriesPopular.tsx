import { classNames } from '@/shared/lib/classNames/classNames';
import { memo, useEffect } from 'react';
import { Text } from '@/shared/ui/Text';
import cls from './CategoriesPopular.module.scss';
import { TextSize, TextTheme } from '@/shared/ui/Text/Text';
import { Carousel } from '@/shared/ui/Carousel/Carousel';
import { Card } from '@/shared/ui/Card';
import { CardTheme } from '@/shared/ui/Card/Card';
import { getRouteImage } from '@/shared/consts/router/publicRouter';
import { KitImage } from '@/shared/ui/KitImage/KitImage';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { fetchCategoriesPopular } from '../../model/services/fetchCategoriesPopular';
import { useSelector } from 'react-redux';
import { getCategoriesPopular } from '../../model/selectors/getCategoriesPopular';

interface CategoriesPopularProps {
  className?: string;
}

export const CategoriesPopular = memo((props: CategoriesPopularProps) => {
  const { className } = props;

  const dispatch = useAppDispatch();
  const categories = useSelector(getCategoriesPopular);

  useEffect(() => {
    dispatch(fetchCategoriesPopular());
  }, [dispatch]);

  return (
    <div className={classNames(cls.CategoriesPopular, {}, [className])}>
      <Text
        title={'Популярные категории'}
        theme={TextTheme.INVERTED}
        size={TextSize.XL}
      />
      <Carousel elementsQuantity={4} infinite={true}>
        {categories.map((category) => (
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
});
