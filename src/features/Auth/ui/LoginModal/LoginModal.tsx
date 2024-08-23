import { classNames } from '@/shared/lib/classNames/classNames';
import { memo, useCallback } from 'react';
import cls from './LoginModal.module.scss';
import { AuthFormAsync as AuthForm } from '../AuthForm/AuthForm.async';
import { Modal } from '@/shared/ui/Modal/Modal';
import { useLogin } from '../../api/loginApi';
import { useSelector } from 'react-redux';
import { selectLoginModal } from '../../model/selectors/selectModalAuth';
import { AuthModalActions } from '../../model/slices/AuthModal';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';

interface LoginModalProps {
  className?: string;
}

export const LoginModal = memo((props: LoginModalProps) => {
  const { className } = props;
  const isOpen = useSelector(selectLoginModal);

  const dispatch = useAppDispatch();

  const onClose = useCallback(() => {
    dispatch(AuthModalActions.setOpenLoginModal(false));
  }, [dispatch]);

  const [fetchLogin, { data, isLoading, isSuccess, status, isError }] =
    useLogin();

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      lazy
      className={classNames(cls.LoginModal, {}, [className])}
    >
      <AuthForm
        onClose={onClose}
        status={status}
        isSuccess={isSuccess}
        data={data}
        isLoading={isLoading}
        isError={isError}
        fetch={fetchLogin}
      />
    </Modal>
  );
});

LoginModal.displayName = `LoginModal`;
