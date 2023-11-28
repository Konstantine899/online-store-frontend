import { classNames } from '@/shared/lib/classNames/classNames';
import { memo, ReactNode } from 'react';
import cls from './ButtonClose.module.scss';
import { Button, ButtonSize, ButtonTheme } from '@/shared/ui/Button';

interface ButtonCloseProps {
  className?: string;
  children?: ReactNode;
  onClose?: () => void;
}

export const ButtonClose = memo((props: ButtonCloseProps) => {
  const { className, children, onClose } = props;

  return (
    <Button
      className={classNames(cls.ButtonClose, {}, [className])}
      size={ButtonSize.L}
      theme={ButtonTheme.CLEAR}
      square
      buttonFontSizeZero
      onClick={onClose}
    >
      {children}
    </Button>
  );
});
