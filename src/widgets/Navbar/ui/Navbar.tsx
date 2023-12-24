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
import { LoginModal } from '@/features/Auth';
import { RegistrationModal } from '@/features/Registration';
import { useNavigate } from 'react-router-dom';

interface NavbarProps {
  className?: string;
}

export const Navbar = memo((props: NavbarProps) => {
  const { className } = props;

  const [isOpenLoginModal, setIsOpenLoginModal] = useState(false);
  const [isOpenRegistrationModal, setIsOpenRegistrationModal] = useState(false);

  const navigate = useNavigate();

  const onShowLoginModal = useCallback(() => {
    setIsOpenLoginModal(true);
  }, []);

  const onCloseLoginModal = useCallback(() => {
    setIsOpenLoginModal(false);
    navigate(publicRoutePath.main);
  }, [navigate]);

  const onShowRegistrationModal = useCallback(() => {
    setIsOpenRegistrationModal(true);
  }, []);

  const onCloseRegistrationModal = useCallback(() => {
    setIsOpenRegistrationModal(false);
    navigate(publicRoutePath.main);
  }, [navigate]);

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
            onClick={onShowLoginModal}
          >
            <Icon className={cls.LoginIcon} Svg={LoginIcon} />
            Войти
          </AppLink>

          <AppLink
            className={cls.registration}
            to={publicRoutePath.sign_up}
            onClick={onShowRegistrationModal}
          >
            <Icon className={cls.UserIcon} Svg={UserIcon} />
            Регистрация
          </AppLink>

          <AppLink className={cls.registration} to={publicRoutePath.get_cart}>
            <Icon className={cls.CartShoppingIcon} Svg={CartShoppingIcon} />
            Корзина
          </AppLink>
          {!isOpenLoginModal}
        </div>
      </div>
      <LoginModal isOpen={isOpenLoginModal} onClose={onCloseLoginModal} />
      <RegistrationModal
        isOpen={isOpenRegistrationModal}
        onClose={onCloseRegistrationModal}
      />
    </nav>
  );
});
