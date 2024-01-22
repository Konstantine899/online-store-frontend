import { classNames } from '@/shared/lib/classNames/classNames';
import React, { ChangeEvent, InputHTMLAttributes, memo } from 'react';
import cls from './Input.module.scss';
import { Icon } from '@/shared/ui/Icon';

type HtmlInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'onChange' | 'value' | 'readOnly' | 'htmlFor'
>;

interface InputProps extends HtmlInputProps {
  className?: string;
  value?: string;
  htmlFor?: string;
  label?: string;
  fullWidth?: boolean;
  required?: boolean;
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
    htmlFor,
    label,
    required,
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
        id={htmlFor}
        className={cls.input}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChangeHandler}
        required={required}
        {...otherProps}
      />

      {label && (
        <label className={cls.label} htmlFor={htmlFor}>
          {label}
        </label>
      )}
      {Svg && (
        <Icon className={cls.inputSvg} Svg={Svg} onClick={onViewPassword} />
      )}
    </div>
  );
});
