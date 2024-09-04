import { classNames } from '@/shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './ProductsNotFound.module.scss';
import { ProductsPopular } from '../ProductsPopular/ProductsPopular';
import { useSelector } from 'react-redux';
import { selectProductsState } from '../../model/selectors/selectProducts';
import { Text } from '@/shared/ui/Text';
import { TextSize, TextTheme } from '@/shared/ui/Text/Text';
import { useSearchParams } from 'react-router-dom';

interface ProductsNotFoundProps {
  className?: string;
}

export const ProductsNotFound = memo((props: ProductsNotFoundProps) => {
  const { className } = props;

  const products = useSelector(selectProductsState);
  const [searchParams] = useSearchParams();
  const search = searchParams.get('search') || '';

  return (
    <div className={classNames(cls.ProductsNotFound, {}, [className])}>
      <Text
        theme={TextTheme.BLACK}
        size={TextSize.M}
        title={'Результат поиска'}
        text={`По запросу "${search}" найдено ${products.count} товаров`}
        className={cls.Search}
      />
      <Text
        title={`Популярные товары`}
        size={TextSize.XL}
        theme={TextTheme.BLACK}
      />
      <ProductsPopular />
    </div>
  );
});

ProductsNotFound.displayName = `ProductsNotFound`;
