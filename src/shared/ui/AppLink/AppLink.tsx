import { Link, LinkProps } from 'react-router-dom';
import { ReactNode } from 'react';
import { classNames } from '../../lib/classNames/classNames';
import cls from './AppLink.module.scss';

export enum AppLinkFontSize {
  S = 'size_s',
  M = 'size_m',
  L = 'size_l',
  XL = 'size_xl',
}

export enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

interface AppLinkProps extends LinkProps {
  className?: string;
  theme?: AppLinkTheme;
  fontSize?: AppLinkFontSize;
  children?: ReactNode;
}

export const AppLink = (props: AppLinkProps) => {
  const {
    children,
    theme = AppLinkTheme.SECONDARY,
    fontSize = AppLinkFontSize.M,
    className,
    to,
    ...otherProps
  } = props;

  return (
    <Link
      className={classNames(cls.AppLink, {}, [
        className,
        cls[theme],
        cls[fontSize],
      ])}
      to={to}
      {...otherProps}
    >
      {children}
    </Link>
  );
};
