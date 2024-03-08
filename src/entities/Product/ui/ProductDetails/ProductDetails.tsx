import { classNames } from '@/shared/lib/classNames/classNames';
import { memo, useEffect } from 'react';
import cls from './ProductDetails.module.scss';
import { IProductDetails } from '../../model/types/IProductDetails';
import { useSelector } from 'react-redux';
import {
  getProductDetailsErrorSelector,
  getProductDetailsInitedSelector,
  getProductDetailsIsLoadingSelector,
} from '../../model/selectors/getProductDetails';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { getBrandNameSelector, fetchBrand } from '@/entities/Brand';
import { fetchCategory, getCategoryNameSelector } from '@/entities/Category';
import { KitImage } from '@/shared/ui/KitImage/KitImage';
import { getVotes, fetchRating, getRating } from '@/entities/Rating';

interface ProductDetailsProps {
  className?: string;
  productDetails: IProductDetails;
}

export const ProductDetails = memo((props: ProductDetailsProps) => {
  const { className, productDetails } = props;

  const dispatch = useAppDispatch();
  const _inited = useSelector(getProductDetailsInitedSelector);

  useEffect(() => {
    if (_inited) {
      dispatch(fetchBrand({ id: productDetails?.brand_id }));
      dispatch(fetchCategory({ id: productDetails?.brand_id }));
      dispatch(fetchRating({ productId: productDetails?.id }));
    }
  }, [_inited, dispatch, productDetails?.brand_id, productDetails?.id]);

  const isLoading = useSelector(getProductDetailsIsLoadingSelector);
  const error = useSelector(getProductDetailsErrorSelector);
  const brand = useSelector(getBrandNameSelector);
  const category = useSelector(getCategoryNameSelector);
  const rating = useSelector(getRating);
  const votes = useSelector(getVotes);

  if (isLoading) {
    return (
      <div className={classNames(cls.ProductDetails, {}, [className])}>
        Loading...
      </div>
    );
  }

  if (error) {
    return (
      <div className={classNames(cls.ProductDetails, {}, [className])}>
        {error}
      </div>
    );
  }

  return (
    <div className={classNames(cls.ProductDetails, {}, [className])}>
      <p>{productDetails?.name}</p>
      <p>{`Категория:${category}`}</p>
      <p>{`Бренд:${brand}`}</p>
      <p>{`Рейтинг:${rating}`}</p>
      <p>{`Количество голосов:${votes}`}</p>
      <p>{`Цена:${productDetails?.price}`}</p>
      <KitImage
        src={_inited && `${__API_URL__}/static/${productDetails?.image}`}
        width={300}
        height={300}
      />
      <table>
        <thead>
          <tr>
            <th>Свойства</th>
            <th>Характеристики</th>
          </tr>
        </thead>
        <tbody>
          {productDetails?.properties.map((property) => (
            <tr key={property.id}>
              <th>{property.name}</th>
              <th>{property.value}</th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
});
