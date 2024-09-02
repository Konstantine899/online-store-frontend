import { classNames } from '@/shared/lib/classNames/classNames';
import { memo, useEffect } from 'react';
import cls from './ProductsNotFound.module.scss';
import { ProductsPopular } from '@/entities/Product/ui/ProductsPopular/ProductsPopular';
import { useSelector } from 'react-redux';
import { selectProductsState } from '@/entities/Product';
import { Text } from '@/shared/ui/Text';
import { TextSize, TextTheme } from '@/shared/ui/Text/Text';
import { useSearchParams } from 'react-router-dom';

interface ProductsNotFoundProps {
  className?: string;
}

export const ProductsNotFound = memo((props: ProductsNotFoundProps) => {
  const { className } = props;

  const products = useSelector(selectProductsState);
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get('search') || '';

  useEffect(() => {
    setSearchParams(search);
  }, [search, setSearchParams]);

  console.log(products);

  return (
    <div className={classNames(cls.ProductsNotFound, {}, [className])}>
      <Text
        theme={TextTheme.INVERTED}
        title={'Результаты поиска'}
        text={`По запросу "${search}" найдено ${products.count} товаров`}
        className={cls.Search}
      />
      <Text
        title={`Популярные товары`}
        size={TextSize.L}
        theme={TextTheme.INVERTED}
      />
      <ProductsPopular />
    </div>
  );
});

ProductsNotFound.displayName = `ProductsNotFound`;
