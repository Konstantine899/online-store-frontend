import { classNames } from '@/shared/lib/classNames/classNames';
import { memo, useCallback } from 'react';
import cls from './RegistrationModal.module.scss';
import { Modal } from '@/shared/ui/Modal/Modal';
import { useSelector } from 'react-redux';
import { selectRegistrationModal } from '../../model/selectors/selectModalAuth';
import { AuthActions } from '../../model/slices/AuthSlice';
import { AuthModalActions } from '../../model/slices/AuthModal';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { RegistrationFormAsync as RegistrationForm } from '../RegistrationForm/RegistrationForm.async';

interface RegistrationModelProps {
  className?: string;
}

export const RegistrationModal = memo((props: RegistrationModelProps) => {
  const { className } = props;
  const dispatch = useAppDispatch();
  const isOpen = useSelector(selectRegistrationModal);

  const onClose = useCallback(() => {
    dispatch(AuthActions.setEmail(''));
    dispatch(AuthActions.setPassword(''));
    dispatch(AuthActions.removeValidationErrors());
    dispatch(AuthModalActions.setOpenRegistrationModal(false));
  }, [dispatch]);

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      lazy
      className={classNames(cls.RegistrationModel, {}, [className])}
    >
      <RegistrationForm />
    </Modal>
  );
});

RegistrationModal.displayName = `RegistrationModal`;
