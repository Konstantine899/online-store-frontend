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
import { Card } from '@/shared/ui/Card';
import { CardTheme } from '@/shared/ui/Card/Card';
import { Button, ButtonSize, ButtonTheme } from '@/shared/ui/Button';

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
  // const votes = `6540680`.split('');
  // let result: string;
  // votes.forEach((char, index, array) => {
  //   if (array.length === 7) {
  //     const firstChar = array.slice(0, 1);
  //     firstChar.push(' ');
  //     const thirdChar = array.slice(1, 4);
  //     thirdChar.push(' ');
  //     const fiveChar = array.slice(4, 7);
  //     fiveChar.push(' ');
  //     console.log(firstChar.concat(thirdChar).concat(fiveChar).join(''));
  //     result = firstChar.concat(thirdChar).concat(fiveChar).join('');
  //   }
  // });

  // console.log('result', result);

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
    <div className={classNames(cls.ProductDetailsWrapper, {}, [className])}>
      {/*<p>{productDetails?.name}</p>*/}
      {/*<p>{`Категория:${category}`}</p>*/}
      {/*<p>{`Бренд:${brand}`}</p>*/}

      <div className={classNames(cls.ProductDetails, {}, [className])}>
        <KitImage
          src={`${__API_URL__}/static/${productDetails?.image}`}
          spareImage={
            <img
              src={`${__API_URL__}/static/not_found_image.jpeg`}
              alt={'not_found_image'}
            />
          }
        />
        <Card className={cls.ProductSummaryCard} theme={CardTheme.OUTLINED}>
          <div className={cls.upp}>
            <p className={cls.price}>{`Цена:${productDetails?.price}`}</p>
          </div>
          <div className={cls.down}>
            <Button theme={ButtonTheme.FILLED} size={ButtonSize.M} fullWidth>
              В корзину
            </Button>
            <div className={cls.rating}>
              <p>{`${rating}`}</p>
              <p>{`голоса: ${votes}`}</p>
            </div>
          </div>
        </Card>
      </div>
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
