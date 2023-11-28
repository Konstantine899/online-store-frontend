import { classNames } from '@/shared/lib/classNames/classNames';
import { memo, ReactNode, MouseEvent } from 'react';
import cls from './Modal.module.scss';

interface ModalProps {
  className?: string;
  children?: ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
}

export const Modal = memo((props: ModalProps) => {
  const { className, isOpen, onClose, children } = props;

  const closeModal = () => {
    if (onClose) {
      onClose();
    }
  };
  const stoppingEventBubbling = (event: MouseEvent): void => {
    event.stopPropagation();
  };

  const mods: Record<string, boolean> = {
    [cls.opened]: isOpen,
  };

  const modsChildren: Record<string, boolean> = {
    [cls.contentOpened]: isOpen,
  };

  return (
    <div className={classNames(cls.Modal, mods, [className])}>
      <div onClick={closeModal} className={cls.overlay}>
        <div
          onClick={stoppingEventBubbling}
          className={classNames(cls.content, modsChildren, [])}
        >
          {children}
        </div>
      </div>
    </div>
  );
});
