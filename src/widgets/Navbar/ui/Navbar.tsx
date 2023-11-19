import { memo } from "react";
import { classNames } from "../../../shared/lib/classNames/classNames";
import { Link } from "react-router-dom";
import cls from "./Navbar.module.scss";
import { publicRoutePath } from "../../../app/providers/router/config/publicRouterConfig";

interface NavbarProps {
  className?: string;
}

export const Navbar = memo((props: NavbarProps) => {
  const { className } = props;

  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <Link to={publicRoutePath.main}>Магазин</Link>
      <div className={cls.publicLink}>
        <Link to={publicRoutePath.auth}>Войти</Link>
        <Link to={publicRoutePath.sign_up}>Регистрация</Link>
      </div>
    </div>
  );
});
