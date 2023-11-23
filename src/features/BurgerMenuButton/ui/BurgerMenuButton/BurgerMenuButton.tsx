import { classNames } from '@/shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './BurgerMenuButton.module.scss';

interface BurgerMenuButtonProps {
  className?: string;
}

export const BurgerMenuButton = memo((props: BurgerMenuButtonProps) => {
  const { className } = props;

  return (
    <div className={classNames(cls.BurgerMenuButton, {}, [className])}>
      sdsdd
    </div>
  );
});
