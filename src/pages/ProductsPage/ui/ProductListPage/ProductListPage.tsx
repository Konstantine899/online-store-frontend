import { classNames } from '@/shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './ProductListPage.module.scss';
import { ProductList, ProductSchema } from '@/entities/Product';

const products: ProductSchema[] = [
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
    image: '',
    category_id: 1,
    brand_id: 1,
  },
];

interface ArticleListPageProps {
  className?: string;
}

export const ProductListPage = memo((props: ArticleListPageProps) => {
  const { className } = props;

  return (
    <div className={classNames(cls.ArticleListPage, {}, [className])}>
      <ProductList products={products} />
    </div>
  );
});
