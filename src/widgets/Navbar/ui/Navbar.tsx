import { memo, useCallback, useState } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Navbar.module.scss';
import { AppLink } from '@/shared/ui/AppLink';
import { CategoriesBurgerMenu } from '@/entities/Category';
import { Icon } from '@/shared/ui/Icon';
import UserIcon from '@/shared/assets/icons/registration.svg';
import LogoutIcon from '@/shared/assets/icons/logout.svg';
import LoginIcon from '@/shared/assets/icons/login.svg';
import CartShoppingIcon from '@/shared/assets/icons/cart.svg';
import { LoginActions, LoginModal } from '@/features/Login';
import {
  RegistrationModal,
  RegistrationActions,
} from '@/features/Registration';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { useSelector } from 'react-redux';
import { getUserState, UserActions } from '@/entities/User';
import { AuthActions } from '@/entities/Auth';
import { useNavigate } from 'react-router';
import { AppLinkTheme } from '@/shared/ui/AppLink/AppLink';
import {
  getRouteCart,
  getRouteMain,
} from '@/shared/consts/router/publicRouter';
import { ProductSearch } from '@/entities/Product';

interface NavbarProps {
  className?: string;
}

export const Navbar = memo((props: NavbarProps) => {
  const { className } = props;

  const [isOpenLoginModal, setIsOpenLoginModal] = useState(false);
  const [isOpenRegistrationModal, setIsOpenRegistrationModal] = useState(false);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const authData = useSelector(getUserState);

  const onShowLoginModal = useCallback(() => {
    setIsOpenLoginModal(true);
  }, []);

  const onCloseLoginModal = useCallback(() => {
    dispatch(LoginActions.resetValidationErrors(undefined));
    dispatch(LoginActions.setEmail(''));
    dispatch(LoginActions.setPassword(''));
    setIsOpenLoginModal(false);
    navigate(getRouteMain());
  }, [dispatch, navigate]);

  const onShowRegistrationModal = useCallback(() => {
    setIsOpenRegistrationModal(true);
  }, []);

  const onCloseRegistrationModal = useCallback(() => {
    dispatch(RegistrationActions.resetValidationErrors(undefined));
    dispatch(RegistrationActions.setEmail(''));
    dispatch(RegistrationActions.setPassword(''));
    setIsOpenRegistrationModal(false);
    navigate(getRouteMain());
  }, [dispatch, navigate]);

  const onLogout = () => {
    dispatch(UserActions.removeUserData());
    dispatch(AuthActions.removeAuthData());
  };

  if (authData) {
    return (
      <nav className={classNames(cls.Navbar, {}, [className])}>
        <div className={cls.Navbar_content}>
          <div className={cls.Navbar_content_left}>
            <CategoriesBurgerMenu />
            <AppLink
              className={cls.Navbar_content_left_a}
              theme={AppLinkTheme.SECONDARY}
              to={getRouteMain()}
            >
              Магазин
            </AppLink>
          </div>
          <div className={cls.Navbar_content_center}>
            <ProductSearch />
          </div>
          <div className={cls.Navbar_content_right}>
            <AppLink
              className={cls.logout}
              theme={AppLinkTheme.SECONDARY}
              to={getRouteMain()}
              onClick={onLogout}
            >
              <Icon className={cls.LogoutIcon} Svg={LogoutIcon} />
              Выйти
            </AppLink>
            <AppLink className={cls.registration} to={getRouteCart()}>
              <Icon className={cls.CartShoppingIcon} Svg={CartShoppingIcon} />
              Корзина
            </AppLink>
          </div>
        </div>
      </nav>
    );
  }

  return (
    <nav className={classNames(cls.Navbar, {}, [className])}>
      <div className={cls.Navbar_content}>
        <div className={cls.Navbar_content_left}>
          <CategoriesBurgerMenu />
          <AppLink className={cls.Navbar_content_left_a} to={getRouteMain()}>
            Магазин
          </AppLink>
        </div>
        <div className={cls.Navbar_content_center}>
          <ProductSearch />
        </div>
        <div className={cls.Navbar_content_right}>
          <AppLink
            className={cls.login}
            to={getRouteMain()}
            onClick={onShowLoginModal}
          >
            <Icon className={cls.LoginIcon} Svg={LoginIcon} />
            Войти
          </AppLink>

          <AppLink
            className={cls.registration}
            to={getRouteMain()}
            onClick={onShowRegistrationModal}
          >
            <Icon className={cls.UserIcon} Svg={UserIcon} />
            Регистрация
          </AppLink>

          <AppLink className={cls.registration} to={getRouteCart()}>
            <Icon className={cls.CartShoppingIcon} Svg={CartShoppingIcon} />
            Корзина
          </AppLink>
        </div>
      </div>
      {isOpenLoginModal && (
        <LoginModal isOpen={isOpenLoginModal} onClose={onCloseLoginModal} />
      )}
      {isOpenRegistrationModal && (
        <RegistrationModal
          isOpen={isOpenRegistrationModal}
          onClose={onCloseRegistrationModal}
        />
      )}
    </nav>
  );
});
