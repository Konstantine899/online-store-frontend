import { classNames } from '@/shared/lib/classNames/classNames';
import { memo } from 'react';
import { Select } from '@/shared/ui/Select';
import { IProductsSchema, TSortOrder } from '@/entities/Product';
import {
  SelectOptions,
  SelectWidth,
  WrapperWidth,
} from '@/shared/ui/Select/Select/Select';
import { Skeleton } from '@/shared/ui/Skeleton';

interface SortOrderProps {
  className?: string;
  isLoading: boolean;
  isSuccess: boolean;
  selectOptions: SelectOptions<TSortOrder>[];
  sort: TSortOrder;
  onChange: (value: TSortOrder) => void;
  products?: IProductsSchema;
}

export const SortOrder = memo((props: SortOrderProps) => {
  const {
    className,
    isSuccess,
    isLoading,
    selectOptions,
    sort,
    onChange,
    products,
  } = props;

  if (isLoading) {
    return (
      <div className={classNames(``, {}, [className])}>
        <Skeleton width={250} height={34} borderRadius={'10px'} />
      </div>
    );
  }

  if (isSuccess && products!.rows.length > 0) {
    return (
      <div className={classNames(``, {}, [className])}>
        <Select<TSortOrder>
          options={selectOptions}
          label={'По'}
          active={sort}
          onChange={onChange}
          WrapperWidth={WrapperWidth.XL}
          SelectWidth={SelectWidth.XL}
        />
      </div>
    );
  }
});
