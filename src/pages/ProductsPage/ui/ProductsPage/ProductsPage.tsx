import { classNames } from '@/shared/lib/classNames/classNames';
import { memo, Suspense } from 'react';
import cls from './ProductsPage.module.scss';
import { Page } from '@/widgets/Page';
import { Button, ButtonSize, ButtonTheme } from '@/shared/ui/Button';
import { AppLink } from '@/shared/ui/AppLink';
import { publicRoutePath } from '@/app/providers/router/config/publicRouterConfig';
import { Icon } from '@/shared/ui/Icon';
import StarIcon from '@/shared/assets/icons/star.svg';

interface Product {
  id: number;
  name: string;
  price: number;
  rating: number;
  voted: number;
  image: string;
  category_id: number;
  brand_id: number;
}

const products: Product[] = [
  {
    id: 1,
    name: 'test',
    price: 1149,
    rating: 0,
    voted: 1,
    image:
      'https://avatars.mds.yandex.net/get-mpic/11532558/img_id5459453942345951621.png/600x600',
    category_id: 1,
    brand_id: 1,
  },
  {
    id: 2,
    name: 'test',
    price: 1149,
    rating: 0,
    voted: 0,
    image:
      'https://phonesdata.com/files/models/Samsung-Galaxy-Ace-S5830-363.jpg',
    category_id: 1,
    brand_id: 1,
  },
  {
    id: 3,
    name: 'test',
    price: 1149,
    rating: 5,
    voted: 1000000,
    image:
      'https://cdn21vek.by/img/galleries/8551/497/preview_b/spark10c4gb128gbki5m_tecno_650aabd428f73.jpeg',
    category_id: 1,
    brand_id: 1,
  },
  {
    id: 4,
    name: 'Смартфон Tecno Spark Go 2023 3GB/64GB',
    price: 199,
    rating: 5,
    voted: 1,
    image:
      'https://cdn21vek.by/img/galleries/8448/541/preview_b/sparkgo20233gb64gbtcnbf7n64enbk_tecno_654b43c4d0bfe.jpeg',
    category_id: 1,
    brand_id: 1,
  },
  {
    id: 5,
    name: 'Смартфон Tecno Spark Go 2023 3GB/64GB',
    price: 199,
    rating: 5,
    voted: 1,
    image:
      'https://cdn21vek.by/img/galleries/8448/541/preview_b/sparkgo20233gb64gbtcnbf7n64enbk_tecno_654b43c4d0bfe.jpeg',
    category_id: 1,
    brand_id: 1,
  },
  {
    id: 6,
    name: 'Смартфон Tecno Spark Go 2023 3GB/64GB',
    price: 199,
    rating: 5,
    voted: 1,
    image:
      'https://cdn21vek.by/img/galleries/8448/541/preview_b/sparkgo20233gb64gbtcnbf7n64enbk_tecno_654b43c4d0bfe.jpeg',
    category_id: 1,
    brand_id: 1,
  },
  {
    id: 7,
    name: 'Смартфон Tecno Spark Go 2023 3GB/64GB',
    price: 199,
    rating: 5,
    voted: 1,
    image:
      'https://cdn21vek.by/img/galleries/8448/541/preview_b/sparkgo20233gb64gbtcnbf7n64enbk_tecno_654b43c4d0bfe.jpeg',
    category_id: 1,
    brand_id: 1,
  },
];

interface ProductsPageProps {
  className?: string;
}

const ProductsPage = memo((props: ProductsPageProps) => {
  const { className } = props;

  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <Page className={classNames(cls.ProductsPage, {}, [className])}>
        {products.map((product) => (
          <div key={product.id} className={cls.Card}>
            <div className={cls.CardTop}>
              <AppLink
                to={publicRoutePath.get_product}
                className={cls.CardImage}
              >
                <img src={product.image} alt={product.name} />
              </AppLink>
            </div>
            <div className={cls.CardBottom}>
              <div className={cls.CardPrice}>
                <div className={cls.CardPriceCommon}>{product.price}</div>
              </div>
              <div className={cls.CardRating}>
                <div className={cls.RatingWrapper}>
                  <Icon className={cls.StarIcon} Svg={StarIcon} />
                  <div className={cls.Rating}>{product.rating}</div>
                </div>

                {/* Должна быть работа со строками обработай */}
                <div className={cls.Voted}>{product.voted} оценки</div>
              </div>
              <AppLink
                to={publicRoutePath.get_product}
                className={cls.CardTitle}
              >
                {product.name}
              </AppLink>
              <Button
                className={cls.CardAdd}
                theme={ButtonTheme.OUTLINE}
                size={ButtonSize.M}
                fullWidth
              >
                Добавить в корзину
              </Button>
            </div>
          </div>
        ))}
      </Page>
    </Suspense>
  );
});

export default ProductsPage;
