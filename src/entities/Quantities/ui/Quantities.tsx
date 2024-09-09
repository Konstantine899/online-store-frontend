import { classNames } from '@/shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './Quantities.module.scss';
import { IProductsSchema } from '@/entities/Product';
import { Skeleton } from '@/shared/ui/Skeleton';
import { Text, TextSize, TextTheme } from '@/shared/ui/Text/Text';
import { getTitle } from '../lib/halpers/getTitle';

interface QuantitiesProps {
  isSuccess: boolean;
  isLoading: boolean;
  className?: string;
  products?: IProductsSchema;
  search?: string;
  categoryName?: string;
}

export const Quantities = memo((props: QuantitiesProps) => {
  const { className, isSuccess, isLoading, products, search, categoryName } =
    props;

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
          title={getTitle({ search, categoryName })}
          text={
            search
              ? `По запросу "${search}" найдено ${products!.count} товаров`
              : `${products!.count} Товаров`
          }
          theme={TextTheme.BLACK}
          size={TextSize.M}
        />
      </div>
    );
  }
});

Quantities.displayName = `Quantities`;
