import { classNames } from '@/shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './BurgerMenuButton.module.scss';

interface BurgerMenuButtonProps {
  className?: string;
  onToggle?: () => void;
}

export const BurgerMenuButton = memo((props: BurgerMenuButtonProps) => {
  const { className, onToggle } = props;

  return (
    <div
      onClick={onToggle}
      className={classNames(cls.BurgerMenuButton, {}, [className])}
    >
      <span />
    </div>
  );
});
