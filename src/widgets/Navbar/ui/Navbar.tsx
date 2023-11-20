import { memo } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./Navbar.module.scss";
import { publicRoutePath } from "@/app/providers/router/config/publicRouterConfig";
import { AppLink } from "@/shared/ui/AppLink/AppLink";

interface NavbarProps {
  className?: string;
}

export const Navbar = memo((props: NavbarProps) => {
  const { className } = props;

  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <AppLink to={publicRoutePath.main}>Магазин</AppLink>
      <div className={cls.publicLink}>
        <AppLink to={publicRoutePath.auth}>Войти</AppLink>
        <AppLink to={publicRoutePath.sign_up}>Регистрация</AppLink>
      </div>
    </div>
  );
});
