import { classNames } from '@/shared/lib/classNames/classNames';
import { memo, useState } from 'react';
import cls from './BurgerMenu.module.scss';
import { BurgerMenuList } from '../BurgerMenuList/BurgerMenuList';

interface BurgerMenuButtonProps {
  className?: string;
}

export const BurgerMenu = memo((props: BurgerMenuButtonProps) => {
  const { className } = props;

  const [isOpen, setIsOpen] = useState(false);
  const [isClose, setIsClose] = useState(false);

  const onToggle = () => {
    setIsOpen(true);
    setIsClose(false);
  };

  const onClose = () => {
    setIsClose(true);
    setIsOpen(false);
  };

  return (
    <>
      <div
        onClick={onToggle}
        className={classNames(cls.BurgerMenuButton, {}, [className])}
      >
        <span />
      </div>
      <BurgerMenuList isOpen={isOpen} onClose={onClose} isClose={isClose} />
    </>
  );
});
