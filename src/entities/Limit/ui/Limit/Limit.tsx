import { classNames } from '@/shared/lib/classNames/classNames';
import { memo } from 'react';
import { Select } from '@/shared/ui/Select';
import { IProductsSchema, TSortLimit } from '@/entities/Product';
import {
  SelectOptions,
  SelectWidth,
  WrapperWidth,
} from '@/shared/ui/Select/Select/Select';
import { Skeleton } from '@/shared/ui/Skeleton';

interface LimitProps {
  className?: string;
  isLoading: boolean;
  isSuccess: boolean;
  limit: TSortLimit;
  selectOptions: SelectOptions<TSortLimit>[];
  onChange: (value: TSortLimit) => void;
  products?: IProductsSchema;
}

export const Limit = memo((props: LimitProps) => {
  const {
    className,
    isSuccess,
    isLoading,
    limit,
    selectOptions,
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
        <Select
          options={selectOptions}
          active={`${limit}`}
          onChange={onChange}
          label={'Показывать по'}
          WrapperWidth={WrapperWidth.XL}
          SelectWidth={SelectWidth.M}
        />
      </div>
    );
  }
});
