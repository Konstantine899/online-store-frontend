import { memo, useCallback, useState } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Navbar.module.scss';
import { publicRoutePath } from '@/app/providers/router/config/publicRouterConfig';
import { AppLink } from '@/shared/ui/AppLink';
import { BurgerMenuButton } from '@/features/BurgerMenuButton';
import { Icon } from '@/shared/ui/Icon';
import UserIcon from '@/shared/assets/icons/registration.svg';
import LoginIcon from '@/shared/assets/icons/login.svg';
import CartShoppingIcon from '@/shared/assets/icons/cart.svg';
import { LoginModal } from '@/features/Auth/ui/LoginModal/LoginModal';

interface NavbarProps {
  className?: string;
}

export const Navbar = memo((props: NavbarProps) => {
  const { className } = props;

  const [isOpenModal, setIsOpenModal] = useState(false);

  const onShowModal = useCallback(() => {
    setIsOpenModal(true);
  }, []);

  const onCloseModal = useCallback(() => {
    setIsOpenModal(false);
  }, []);

  return (
    <nav className={classNames(cls.Navbar, {}, [className])}>
      <div className={cls.Navbar_content}>
        <div className={cls.Navbar_content_left}>
          <BurgerMenuButton />
          <AppLink
            className={cls.Navbar_content_left_a}
            to={publicRoutePath.main}
          >
            Магазин
          </AppLink>
        </div>
        <div className={cls.Navbar_content_right}>
          <AppLink
            className={cls.login}
            to={publicRoutePath.auth}
            onClick={onShowModal}
          >
            <Icon className={cls.LoginIcon} Svg={LoginIcon} />
            Войти
          </AppLink>

          <AppLink className={cls.registration} to={publicRoutePath.sign_up}>
            <Icon className={cls.UserIcon} Svg={UserIcon} />
            Регистрация
          </AppLink>

          <AppLink className={cls.registration} to={publicRoutePath.get_cart}>
            <Icon className={cls.CartShoppingIcon} Svg={CartShoppingIcon} />
            Корзина
          </AppLink>
        </div>
      </div>
      <LoginModal isOpen={isOpenModal} onClose={onCloseModal} />
    </nav>
  );
});
