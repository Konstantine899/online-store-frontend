import { classNames } from '@/shared/lib/classNames/classNames';
import {
  memo,
  ReactNode,
  MouseEvent,
  useState,
  useRef,
  useEffect,
} from 'react';
import cls from './Modal.module.scss';

interface ModalProps {
  className?: string;
  children?: ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
}

export const Modal = memo((props: ModalProps) => {
  const { className, isOpen, onClose, children } = props;
  const [isClosing, setIsClosing] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout>>();

  const closeModal = () => {
    if (onClose) {
      setIsClosing(true);
      timerRef.current = setTimeout(() => {
        onClose();
        setIsClosing(false);
      }, 300);
    }
  };
  const stoppingEventBubbling = (event: MouseEvent): void => {
    event.stopPropagation();
  };

  const mods: Record<string, boolean> = {
    [cls.opened]: isOpen,
    [cls.isClosing]: isClosing,
  };

  const modsChildren: Record<string, boolean> = {
    [cls.contentOpened]: isOpen,
  };

  const onKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      closeModal();
    }
  };

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', onKeyDown);
    }
    if (isClosing) {
      return () => {
        clearTimeout(timerRef.current);
        window.removeEventListener('keydown', onKeyDown);
      };
    }
  }, [isOpen]);

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
