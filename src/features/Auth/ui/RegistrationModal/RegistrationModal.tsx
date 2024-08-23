import { classNames } from '@/shared/lib/classNames/classNames';
import { memo, useCallback } from 'react';
import cls from './RegistrationModal.module.scss';
import { AuthFormAsync as AuthForm } from '../AuthForm/AuthForm.async';
import { Modal } from '@/shared/ui/Modal/Modal';
import { useRegistration } from '../../api/registrationApi';
import { useSelector } from 'react-redux';
import { selectRegistrationModal } from '../../model/selectors/selectModalAuth';
import { AuthActions } from '../../model/slices/AuthSlice';
import { AuthModalActions } from '../../model/slices/AuthModal';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';

interface RegistrationModelProps {
  className?: string;
}

export const RegistrationModal = memo((props: RegistrationModelProps) => {
  const { className } = props;
  const dispatch = useAppDispatch();
  const isOpen = useSelector(selectRegistrationModal);

  const [fetchRegistration, { data, isLoading, status, isSuccess, isError }] =
    useRegistration();

  const onClose = useCallback(() => {
    dispatch(AuthActions.setEmail(''));
    dispatch(AuthActions.setPassword(''));
    dispatch(AuthModalActions.setOpenRegistrationModal(false));
  }, [dispatch]);

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
        isError={isError}
        status={status}
      />
    </Modal>
  );
});

RegistrationModal.displayName = `RegistrationModal`;
