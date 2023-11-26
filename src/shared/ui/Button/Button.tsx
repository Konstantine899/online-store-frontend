import { classNames } from '@/shared/lib/classNames/classNames';
import { ButtonHTMLAttributes, memo, ReactNode } from 'react';
import cls from './Button.module.scss';

export enum ButtonSize {
  M = 'size_m',
  L = 'size_l',
  XL = 'size_xl',
}

export enum ButtonTheme {
  CLEAR = 'clear',
  OUTLINE = 'outline',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  disabled?: boolean;
  square?: boolean;
  fullWidth?: boolean;
  buttonFontSizeZero?: boolean;
  size?: ButtonSize;
  theme?: ButtonTheme;
  children?: ReactNode;
}

export const Button = memo((props: ButtonProps) => {
  const {
    className,
    square,
    children,
    size,
    theme,
    fullWidth,
    disabled,
    buttonFontSizeZero,
    ...otherProps
  } = props;

  return (
    <button
      type="button"
      className={classNames(
        cls.Button,
        {
          [cls.square]: square,
          [cls.disabled]: disabled,
          [cls.fullWidth]: fullWidth,
          [cls.buttonFontSizeZero]: buttonFontSizeZero,
        },
        [className, cls[theme], cls[size]],
      )}
      disabled={disabled}
      {...otherProps}
    >
      {children}
    </button>
  );
});
