import { classNames } from '@/shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './RegistrationModel.module.scss';
import { AuthFormAsync as AuthForm } from '../../AuthForm/AuthForm.async';
import { Modal } from '@/shared/ui/Modal/Modal';
import { useRegistration } from '../../../api/registrationApi';

interface RegistrationModelProps {
  className?: string;
  onClose: () => void;
  isOpen: boolean;
}

export const RegistrationModal = memo((props: RegistrationModelProps) => {
  const { className, onClose, isOpen } = props;
  const [fetchRegistration, { data, isLoading, status, isSuccess }] =
    useRegistration();

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      lazy
      className={classNames(cls.RegistrationModel, {}, [className])}
    >
      <AuthForm
        onClose={onClose}
        fetch={fetchRegistration}
        data={data}
        isLoading={isLoading}
        isSuccess={isSuccess}
        status={status}
      />
    </Modal>
  );
});
