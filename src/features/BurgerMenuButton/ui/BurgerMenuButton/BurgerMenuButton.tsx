import { classNames } from '@/shared/lib/classNames/classNames';
import { memo, useState } from 'react';
import cls from './BurgerMenuButton.module.scss';
import { CategoryList } from '@/entities/Category';

interface BurgerMenuButtonProps {
  className?: string;
}

export const BurgerMenuButton = memo((props: BurgerMenuButtonProps) => {
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
      <CategoryList isOpen={isOpen} onClose={onClose} isClose={isClose} />
    </>
  );
});
