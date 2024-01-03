import { classNames } from '@/shared/lib/classNames/classNames';
import {
  memo,
  MouseEvent,
  ReactNode,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import cls from './Modal.module.scss';
import { Portal } from '@/shared/ui/Portal';

interface ModalProps {
  className?: string;
  children?: ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
  lazy?: boolean;
}

export const Modal = memo((props: ModalProps) => {
  const { className, isOpen, onClose, lazy, children } = props;
  const [isClosing, setIsClosing] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    if (isOpen) {
      setIsMounted(true);
    }
  }, [isOpen]);

  const closeModal = useCallback(() => {
    if (onClose) {
      setIsClosing(true);
      timerRef.current = setTimeout(() => {
        onClose();
        setIsClosing(false);
      }, 300);
    }
  }, [onClose]);
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

  const onKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeModal();
      }
    },
    [closeModal],
  );

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
  }, [isClosing, isOpen, onKeyDown]);

  if (lazy && !isMounted) {
    return null;
  }
  return (
    <Portal>
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
    </Portal>
  );
});
