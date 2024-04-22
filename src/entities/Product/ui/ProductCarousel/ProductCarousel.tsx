import { classNames } from '@/shared/lib/classNames/classNames';
import { memo, useEffect } from 'react';
import cls from './ProductCarousel.module.scss';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { fetchProductsCarousel } from '../../model/services/fetchProductsCarousel';
import { useSelector } from 'react-redux';
import { getProductsListSelector } from '../../model/selectors/getProductsSelector';
import { Carousel } from '@/shared/ui/Carousel/Carousel';
import { ProductCard } from '../ProductCard/ProductCard';

interface ProductCarouselProps {
  className?: string;
}

export const ProductCarousel = memo((props: ProductCarouselProps) => {
  const { className } = props;
  const dispatch = useAppDispatch();
  const products = useSelector(getProductsListSelector);

  useEffect(() => {
    dispatch(fetchProductsCarousel());
  }, [dispatch]);

  return (
    <div className={classNames(cls.ProductCarousel, {}, [className])}>
      {
        <Carousel elementsQuantity={5} infinite={true}>
          {products.map((product) => (
            <div key={product.id}>
              <ProductCard product={product} />
            </div>
          ))}
        </Carousel>
      }
    </div>
  );
});
