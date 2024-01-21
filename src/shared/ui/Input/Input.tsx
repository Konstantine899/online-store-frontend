import { classNames } from '@/shared/lib/classNames/classNames';
import { ChangeEvent, InputHTMLAttributes, memo } from 'react';
import cls from './Input.module.scss';

type HtmlInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'onChange' | 'value' | 'readOnly'
>;

interface InputProps extends HtmlInputProps {
  className?: string;
  value?: string;
  fullWidth?: boolean;
  onChange?: (value: string) => void;
}

export const Input = memo((props: InputProps) => {
  const {
    className,
    value,
    onChange,
    placeholder,
    type = 'text',
    ...otherProps
  } = props;
  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    onChange?.(event.target.value);
  };

  return (
    <div className={classNames(cls.InputWrapper, {}, [className])}>
      {placeholder && <div className={cls.placeholder}>{placeholder}</div>}
      <input
        className={cls.input}
        type={type}
        value={value}
        onChange={onChangeHandler}
        {...otherProps}
      />
    </div>
  );
});
