import { classNames } from '@/shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './Quantities.module.scss';
import { IProductsSchema } from '@/entities/Product';
import { Skeleton } from '@/shared/ui/Skeleton';
import { Text, TextSize, TextTheme } from '@/shared/ui/Text/Text';

interface QuantitiesProps {
  className?: string;
  products?: IProductsSchema;
  isSuccess: boolean;
  isLoading: boolean;
  search: string;
}

export const Quantities = memo((props: QuantitiesProps) => {
  const { className, isSuccess, isLoading, products, search } = props;

  if (isLoading) {
    return (
      <div className={classNames(cls.Quantities, {}, [className])}>
        <Skeleton width={173} height={40} borderRadius={'10px'} />
        <Skeleton width={58} height={40} borderRadius={'10px'} />
      </div>
    );
  }

  if (isSuccess && products!.rows.length > 0) {
    return (
      <div className={classNames(cls.Quantities, {}, [className])}>
        <Text
          title={search && `Результат поиска`}
          text={
            search &&
            `По запросу "${search}" найдено ${products!.count} товаров`
          }
          theme={TextTheme.BLACK}
          size={TextSize.M}
        />
      </div>
    );
  }
});
