import { classNames } from '@/shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './RegistrationModel.module.scss';
import { RegistrationFormAsync as RegistrationForm } from '../RegistrationForm/RegistrationForm.async';
import { Modal } from '@/shared/ui/Modal/Modal';

interface RegistrationModelProps {
  className?: string;
  onClose: () => void;
  isOpen: boolean;
}

export const RegistrationModal = memo((props: RegistrationModelProps) => {
  const { className, onClose, isOpen } = props;

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      lazy
      className={classNames(cls.RegistrationModel, {}, [className])}
    >
      <RegistrationForm onClose={onClose} />
    </Modal>
  );
});
