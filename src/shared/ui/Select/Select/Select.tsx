import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Select.module.scss';
import { Fragment, useState } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import SelectArrowIcon from '@/shared/assets/icons/select-arrow.svg';
import CheckIcon from '@/shared/assets/icons/selected.svg';
import { Icon } from '../../Icon/Icon';
import { Text, TextSize, TextTheme } from '../../Text/Text';

export enum WrapperWidth {
  XL = 'wrapper-xl',
  L = 'wrapper-l',
  M = 'wrapper-m',
  S = 'wrapper-s',
}

export enum SelectWidth {
  XL = 'select-xl',
  L = 'select-l',
  M = 'select-m',
  S = 'select-s',
}

export interface SelectOptions<T extends string> {
  value: T;
  content: string;
}

interface SelectProps<T extends string> {
  className?: string;
  options: SelectOptions<T>[];
  active: T;
  onChange: (value: T) => void;
  label: string;
  SelectWidth: SelectWidth;
  WrapperWidth: WrapperWidth;
}

export const Select = <T extends string>(props: SelectProps<T>) => {
  const {
    className,
    options,
    active,
    onChange,
    label,
    WrapperWidth,
    SelectWidth,
  } = props;

  const [hovered, setHovered] = useState(false);

  const onChangeHandler = (value: T) => {
    onChange?.(value);
  };

  const onMouseEnter = () => setHovered(true);
  const onMouseLeave = () => setHovered(false);

  return (
    <div className={classNames(cls.Wrapper, {}, [cls[WrapperWidth]])}>
      <span className={cls.Label}>{label}</span>
      <div
        className={classNames(cls.Select, {}, [className, cls[SelectWidth]])}
      >
        <Listbox value={active} onChange={onChangeHandler}>
          <Listbox.Button
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            className={classNames(cls.ListboxButton, {}, [cls[SelectWidth]])}
          >
            {options.map(({ value, content }) => {
              if (value === active) {
                return (
                  <div key={value} className={cls.btn}>
                    <Text
                      size={TextSize.M}
                      theme={hovered ? TextTheme.PRIMARY : TextTheme.INVERTED}
                      text={content}
                    />
                    <Icon
                      className={cls.SelectArrowIcon}
                      Svg={SelectArrowIcon}
                    />
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
            <Listbox.Options
              className={classNames(cls.ListboxOptions, {}, [cls[SelectWidth]])}
            >
              {options?.map(({ value, content }) => (
                <Listbox.Option
                  className={({ active, selected }) =>
                    `${cls.ListboxOption} ${active && cls.active} ${
                      selected && cls.selected
                    }`
                  }
                  key={value}
                  value={value}
                >
                  {({ selected, active }) => (
                    <>
                      {selected ? (
                        <div className={cls.selected}>
                          <Icon className={cls.CheckIcon} Svg={CheckIcon} />
                          <Text
                            size={TextSize.M}
                            theme={
                              selected ? TextTheme.PRIMARY : TextTheme.INVERTED
                            }
                            text={content}
                          />
                        </div>
                      ) : (
                        <Text
                          size={TextSize.M}
                          theme={
                            active ? TextTheme.PRIMARY : TextTheme.INVERTED
                          }
                          text={content}
                        />
                      )}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </Listbox>
      </div>
    </div>
  );
};
