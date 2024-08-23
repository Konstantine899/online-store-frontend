import { classNames } from '@/shared/lib/classNames/classNames';
import { memo, useCallback } from 'react';
import cls from './LoginModal.module.scss';
import { LoginFormAsync as LoginForm } from '../LoginForm/LoginForm.async';
import { Modal } from '@/shared/ui/Modal/Modal';
import { useSelector } from 'react-redux';
import { selectLoginModal } from '../../model/selectors/selectModalAuth';
import { AuthModalActions } from '../../model/slices/AuthModal';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { AuthActions } from '../../model/slices/AuthSlice';

interface LoginModalProps {
  className?: string;
}

export const LoginModal = memo((props: LoginModalProps) => {
  const { className } = props;
  const isOpen = useSelector(selectLoginModal);

  const dispatch = useAppDispatch();

  const onClose = useCallback(() => {
    dispatch(AuthActions.setEmail(''));
    dispatch(AuthActions.setPassword(''));
    dispatch(AuthActions.removeValidationErrors());
    dispatch(AuthModalActions.setOpenLoginModal(false));
  }, [dispatch]);

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      lazy
      className={classNames(cls.LoginModal, {}, [className])}
    >
      <LoginForm />
    </Modal>
  );
});

LoginModal.displayName = `LoginModal`;
