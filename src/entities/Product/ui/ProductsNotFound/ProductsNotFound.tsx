import { classNames } from '@/shared/lib/classNames/classNames';
import { memo, useEffect } from 'react';
import cls from './ProductsNotFound.module.scss';
import { Carousel } from '@/shared/ui/Carousel/Carousel';
import { useProducts } from '../../api/productsApi';
import { Card } from '@/shared/ui/Card';
import { KitImage } from '@/shared/ui/KitImage/KitImage';
import {
  getRouteImage,
  getRouteImageNotFound,
  getRouteProduct,
} from '@/shared/consts/router/publicRouter';
import { Text } from '@/shared/ui/Text';
import { TextTheme } from '@/shared/ui/Text/Text';
import { AppLink } from '@/shared/ui/AppLink';
import { Button, ButtonSize, ButtonTheme } from '@/shared/ui/Button';

interface ProductsNotFoundProps {
  className?: string;
}

export const ProductsNotFound = memo((props: ProductsNotFoundProps) => {
  const { className } = props;

  const [fetchProducts, { data, isLoading, isSuccess }] = useProducts();

  useEffect(() => {
    fetchProducts({ limit: 20 });
  }, [fetchProducts]);

  if (isLoading) {
    return (
      <div className={classNames(cls.ProductsNotFound, {}, [className])}></div>
    );
  }

  if (isSuccess && data!.rows.length > 0) {
    return (
      <div className={classNames(cls.ProductsNotFound, {}, [className])}>
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
                  <Text theme={TextTheme.INVERTED} text={`${product.name}`} />
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
      </div>
    );
  }
});

ProductsNotFound.displayName = `ProductsNotFound`;
