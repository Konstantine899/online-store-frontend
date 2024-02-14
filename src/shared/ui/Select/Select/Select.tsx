import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Select.module.scss';
import { Fragment } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import SelectArrowIcon from '@/shared/assets/icons/select-arrow.svg';
import SelectedIcon from '@/shared/assets/icons/selected.svg';
import { Icon } from '@/shared/ui/Icon';

export interface SelectOptions<T extends string> {
  value: T;
  content: string;
}

interface SelectProps<T extends string> {
  className?: string;
  options?: SelectOptions<T>[];
  value?: T;
  onChange?: (value: T) => void;
}

export const Select = <T extends string>(props: SelectProps<T>) => {
  const { className, options, value, onChange } = props;

  const onChangeHandler = (value: T) => {
    onChange?.(value);
  };

  return (
    <div className={classNames(cls.SelectWrapper, {}, [className])}>
      <Listbox value={value} onChange={onChangeHandler}>
        <Listbox.Button
          className={classNames(cls.SelectButton, {}, [className])}
        >
          {options.map((btn) => {
            if (btn.value === value) {
              return (
                <div key={btn.value} className={cls.btn}>
                  <span className={cls.btnContent} key={btn.value}>
                    {btn.content}
                  </span>
                  <Icon className={cls.SelectArrow} Svg={SelectArrowIcon} />
                </div>
              );
            }
          })}
        </Listbox.Button>
        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Listbox.Options className={classNames(cls.options, {}, [className])}>
            {options?.map((element) => (
              <Listbox.Option
                className={({ active, selected }) =>
                  `${cls.option} ${active && cls.active} ${
                    selected && cls.selected
                  }`
                }
                key={element.value}
                value={element.value}
              >
                {({ selected }) => (
                  <>
                    {selected ? (
                      <div className={cls.selectedContentWrapper}>
                        <Icon className={cls.SelectedIcon} Svg={SelectedIcon} />
                        <p>{element.content}</p>
                      </div>
                    ) : (
                      <p>{element.content}</p>
                    )}
                  </>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </Listbox>
    </div>
  );
};
