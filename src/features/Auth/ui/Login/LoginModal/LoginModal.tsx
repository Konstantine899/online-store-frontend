import { classNames } from '@/shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './LoginModal.module.scss';
import { AuthFormAsync as AuthForm } from '../../AuthForm/AuthForm.async';
import { Modal } from '@/shared/ui/Modal/Modal';
import { useLogin } from '../../../api/loginApi';

interface LoginModalProps {
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

export const LoginModal = memo((props: LoginModalProps) => {
  const { className, onClose, isOpen } = props;

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
