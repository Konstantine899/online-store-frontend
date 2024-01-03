import { classNames } from '@/shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './RegistrationModal.module.scss';
import { Modal } from '@/shared/ui/Modal/Modal';
import { RegistrationForm } from '../RegistrationForm/RegistrationForm';

interface RegistrationModalProps {
  className?: string;
  isOpen?: boolean;
  onClose?: () => void;
}

export const RegistrationModal = memo((props: RegistrationModalProps) => {
  const { className, onClose, isOpen } = props;

  return (
    <Modal
      className={classNames(cls.RegistrationModal, {}, [className])}
      isOpen={isOpen}
      onClose={onClose}
      lazy
    >
      <RegistrationForm />
    </Modal>
  );
});
