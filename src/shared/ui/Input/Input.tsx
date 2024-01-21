import { classNames } from '@/shared/lib/classNames/classNames';
import React, { ChangeEvent, InputHTMLAttributes, memo } from 'react';
import cls from './Input.module.scss';
import { Icon } from '@/shared/ui/Icon';

type HtmlInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'onChange' | 'value' | 'readOnly'
>;

interface InputProps extends HtmlInputProps {
  className?: string;
  value?: string;
  fullWidth?: boolean;
  Svg?: React.FC<React.SVGProps<SVGElement>>;
  onChange?: (value: string) => void;
  onViewPassword?: () => void;
}

export const Input = memo((props: InputProps) => {
  const {
    className,
    value,
    onChange,
    placeholder,
    Svg,
    onViewPassword,
    type = 'text',
    ...otherProps
  } = props;
  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    onChange?.(event.target.value);
  };

  return (
    <div className={classNames(cls.InputWrapper, {}, [className])}>
      <input
        className={cls.input}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChangeHandler}
        {...otherProps}
      />
      <Icon className={cls.inputSvg} Svg={Svg} onClick={onViewPassword} />
    </div>
  );
});
