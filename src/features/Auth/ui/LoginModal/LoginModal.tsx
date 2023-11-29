import { classNames } from '@/shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './LoginModal.module.scss';
import { LoginForm } from '@/features/Auth/ui/LoginForm/LoginForm';
import { Modal } from '@/shared/ui/Modal/Modal';

interface LoginModalProps {
  className?: string;
  isOpen?: boolean;
  onClose?: () => void;
}

export const LoginModal = memo((props: LoginModalProps) => {
  const { className, onClose, isOpen } = props;

  return (
    <Modal
      className={classNames(cls.LoginModal, {}, [className])}
      isOpen={isOpen}
      onClose={onClose}
    >
      <LoginForm />
    </Modal>
  );
});
