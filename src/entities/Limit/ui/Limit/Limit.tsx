import { classNames } from '@/shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './Limit.module.scss';
import { Select } from '@/shared/ui/Select';
import { TSortLimit } from '@/entities/Product';
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
}

export const Limit = memo((props: LimitProps) => {
  const { className, isSuccess, isLoading, limit, selectOptions, onChange } =
    props;

  if (isLoading) {
    return (
      <div className={classNames(cls.SortingLimit, {}, [className])}>
        <Skeleton width={250} height={34} borderRadius={'10px'} />
      </div>
    );
  }

  if (isSuccess) {
    return (
      <div className={classNames(cls.Limit, {}, [className])}>
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
