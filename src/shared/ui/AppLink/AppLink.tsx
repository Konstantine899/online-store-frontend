import { Link, LinkProps } from "react-router-dom";
import { ReactNode } from "react";
import { classNames } from "../../lib/classNames/classNames";
import cls from "./AppLink.module.scss";

interface AppLinkProps extends LinkProps {
  className?: string;
  children?: ReactNode;
}

export const AppLink = (props: AppLinkProps) => {
  const { children, className, to, ...otherProps } = props;

  return (
    <Link
      className={classNames(cls.AppLink, {}, [className])}
      to={to}
      {...otherProps}
    >
      {children}
    </Link>
  );
};
