import { memo, useEffect } from 'react';
import cls from './ProductsPopular.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useProducts } from '../../api/productsApi';
import { Carousel } from '@/shared/ui/Carousel/Carousel';
import { Card } from '@/shared/ui/Card';
import { AppLink } from '@/shared/ui/AppLink';
import {
  getRouteImage,
  getRouteImageNotFound,
  getRouteProduct,
} from '@/shared/consts/router/publicRouter';
import { KitImage } from '@/shared/ui/KitImage/KitImage';
import { Text } from '@/shared/ui/Text';
import { TextTheme } from '@/shared/ui/Text/Text';
import { Button, ButtonSize, ButtonTheme } from '@/shared/ui/Button';

interface ProductsPopularProps {
  className?: string;
}

export const ProductsPopular = memo((props: ProductsPopularProps) => {
  const { className } = props;

  const [fetchProducts, { data, isLoading, isSuccess }] = useProducts();

  useEffect(() => {
    fetchProducts({ limit: 20 });
  }, [fetchProducts]);

  if (isLoading) {
    return <div></div>;
  }

  if (isSuccess && data!.rows.length > 0) {
    return (
      <Carousel elementsQuantity={5} infinite={false}>
        {data!.rows.map((product) => (
          <Card key={product.id} className={cls.Card}>
            <div className={cls.Top}>
              <AppLink to={getRouteProduct(`${product.id}`)}>
                <KitImage
                  src={getRouteImage(product.image)}
                  width={225}
                  height={220}
                  alt={product.image}
                  spareImage={
                    <img
                      src={getRouteImageNotFound()}
                      alt={'not_found_image'}
                    />
                  }
                />
              </AppLink>
            </div>
            <div className={cls.Bottom}>
              <AppLink to={getRouteProduct(`${product.id}`)}>
                <Text
                  theme={TextTheme.INVERTED}
                  text={`${product.name}`}
                  ellipsis
                />
              </AppLink>
              <Text
                theme={TextTheme.INVERTED}
                text={`${product.price}`}
                className={cls.Price}
              />
              <Button
                className={cls.CardAdd}
                theme={ButtonTheme.OUTLINE}
                size={ButtonSize.M}
                fullWidth
              >
                Добавить в корзину
              </Button>
            </div>
          </Card>
        ))}
      </Carousel>
    );
  }
  return (
    <div className={classNames(cls.ProductsPopular, {}, [className])}></div>
  );
});

ProductsPopular.displayName = `ProductsPopular`;
