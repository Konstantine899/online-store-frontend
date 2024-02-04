import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Select.module.scss';
import { ChangeEvent } from 'react';

export interface SelectOptions<T extends string> {
  value: T;
  content: string;
}

interface SelectProps<T extends string> {
  className?: string;
  options?: SelectOptions<T>[];
  value?: T;
  label?: string;
  onChange?: (value: T) => void;
}

export const Select = <T extends string>(props: SelectProps<T>) => {
  const { className, options, value, label, onChange } = props;

  const optionsList = options?.map((element) => (
    <option className={cls.option} key={element.value} value={element.value}>
      {element.content}
    </option>
  ));

  const onChangeHandler = (event: ChangeEvent<HTMLSelectElement>) => {
    onChange?.(event.target.value as T);
  };

  return (
    <div className={classNames(cls.SelectWrapper, {}, [className])}>
      {label && <span className={cls.Label}>{label}</span>}
      <select className={cls.Select} value={value} onChange={onChangeHandler}>
        {optionsList}
      </select>
    </div>
  );
};
