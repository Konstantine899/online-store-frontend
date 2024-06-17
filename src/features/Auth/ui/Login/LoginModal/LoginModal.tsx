import { classNames } from '@/shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './LoginModal.module.scss';
import { LoginFormAsync as LoginForm } from '../LoginForm/LoginForm.async';
import { Modal } from '@/shared/ui/Modal/Modal';

interface LoginModalProps {
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

export const LoginModal = memo((props: LoginModalProps) => {
  const { className, onClose, isOpen } = props;

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      lazy
      className={classNames(cls.LoginModal, {}, [className])}
    >
      <LoginForm onClose={onClose} />
    </Modal>
  );
});
