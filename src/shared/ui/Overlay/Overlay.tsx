import { classNames } from '@/shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './Overlay.module.scss';

interface OverlayProps {
  className?: string;
  onClose?: () => void;
}

export const Overlay = memo((props: OverlayProps) => {
  const { className, onClose } = props;

  return (
    <div
      onClick={onClose}
      className={classNames(cls.Overlay, {}, [className])}
    />
  );
});
