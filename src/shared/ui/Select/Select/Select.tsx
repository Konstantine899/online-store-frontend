import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Select.module.scss';
import { Fragment } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import SelectArrowIcon from '@/shared/assets/icons/select-arrow.svg';
import SelectedIcon from '@/shared/assets/icons/selected.svg';
import { Icon } from '@/shared/ui/Icon';

export enum SelectSize {
  S = 'size_s',
  M = 'size_m',
  L = 'size_l',
  XL = 'size_xl',
}

export enum SelectWrapperWidth {
  SELECT_WRAPPER_FULL_WIDTH = 'select_wrapper_full_width',
  SELECT_WRAPPER_THREE_QUARTER_WIDTH = 'select_wrapper_free_quarter_width', // 3/4
  SELECT_WRAPPER_HALF_WIDTH = 'select_wrapper_half_width', // 2/4
  SELECT_WRAPPER_ONE_QUARTER_WIDTH = 'select_wrapper_one_quarter_width',
}

export enum SelectWidth {
  SELECT_FULL_WIDTH = 'select_full_width',
  SELECT_THREE_QUARTER_WIDTH = 'select_free_quarter_width', // 3/4
  SELECT_HALF_WIDTH = 'select_half_width', // 2/4
  SELECT_ONE_QUARTER_WIDTH = 'select_one_quarter_width',
}

export enum SelectButtonWidth {
  SELECT_BUTTON_FULL_WIDTH = 'select_button_full_width',
  SELECT_BUTTON_THREE_QUARTER_WIDTH = 'select_button_free_quarter_width', // 3/4
  SELECT_BUTTON_HALF_WIDTH = 'select_button_half_width', // 2/4
  SELECT_BUTTON_ONE_QUARTER_WIDTH = 'select_button_one_quarter_width',
}

export enum OptionsWidth {
  OPTIONS_FULL_WIDTH = 'options_full_width',
  OPTIONS_THREE_QUARTER_WIDTH = 'options_free_quarter_width', // 3/4
  OPTIONS_HALF_WIDTH = 'options_half_width', // 2/4
  OPTIONS_ONE_QUARTER_WIDTH = 'options_one_quarter_width',
}

export interface SelectOptions<T extends string> {
  value: T;
  content: string;
}

interface SelectProps<T extends string> {
  className?: string;
  options?: SelectOptions<T>[];
  value?: T;
  onChange?: (value: T) => void;
  label?: string;
  size?: SelectSize;
  ButtonWidth?: SelectButtonWidth;
  OptionsWidth?: OptionsWidth;
  SelectWidth?: SelectWidth;
  SelectWrapperWidth?: SelectWrapperWidth;
}

export const Select = <T extends string>(props: SelectProps<T>) => {
  const {
    className,
    options,
    value,
    onChange,
    label,
    size,
    SelectWrapperWidth,
    SelectWidth,
    ButtonWidth,
    OptionsWidth,
  } = props;

  const onChangeHandler = (value: T) => {
    onChange?.(value);
  };

  return (
    <div
      className={classNames(cls.SelectWrapper, {}, [
        cls[size],
        cls[SelectWrapperWidth],
      ])}
    >
      <span className={classNames(cls.SelectLabel, {}, [cls[size]])}>
        {label}
      </span>
      <div
        className={classNames(cls.Select, {}, [
          className,
          cls[size],
          cls[SelectWidth],
        ])}
      >
        <Listbox value={value} onChange={onChangeHandler}>
          <Listbox.Button
            className={classNames(cls.Button, {}, [
              cls[size],
              cls[ButtonWidth],
            ])}
          >
            {options.map((btn) => {
              if (btn.value === value) {
                return (
                  <div
                    key={btn.value}
                    className={classNames(cls.btn, {}, [cls[size]])}
                  >
                    <span className={cls.btnContent} key={btn.value}>
                      {btn.content}
                    </span>
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
              className={classNames(cls.options, {}, [
                cls[size],
                cls[OptionsWidth],
              ])}
            >
              {options?.map((element) => (
                <Listbox.Option
                  className={({ active, selected }) =>
                    classNames(
                      `${cls.option} ${active && cls.active} ${
                        selected && cls.selected
                      }`,
                      {},
                      [cls[size]],
                    )
                  }
                  key={element.value}
                  value={element.value}
                >
                  {({ selected }) => (
                    <>
                      {selected ? (
                        <div
                          className={classNames(
                            cls.selectedContentWrapper,
                            {},
                            [cls[size]],
                          )}
                        >
                          <Icon
                            className={cls.SelectedIcon}
                            Svg={SelectedIcon}
                          />
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
    </div>
  );
};
